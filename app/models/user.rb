# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string
#

class User < ApplicationRecord
  # FIGVAPER
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }  # password is never stored in DB (no column exists), so when we pull an existing user from DB, user.password returns nil
  after_initialize :ensure_session_token
  attr_reader :password

  has_many :led_groups,
    primary_key: :id,
    foreign_key: :leader_id,
    class_name: :Group

  has_many :memberships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Usergroup

  has_many :groups,
    through: :memberships,
    source: :group




  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end
  
  def password=(password)
    @password = password  # this instance var is needed only to validate the password's length
    self.password_digest = BCrypt::Password.create(password)  # the password_digest is what gets saved to DB (in place of the password itself)
    # BCrypt::Password.create takes a password, salts and hashes it, returning our digest
  end

  def is_password?(password)
    bcrypt_pw = BCrypt::Password.new(self.password_digest)  # bcrypt_pw is a BCrypt::Password object
    bcrypt_pw.is_password?(password)  # is_password? is a method that a BCrypt::Password object can respond to
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
    # random base64 string to serve as our token
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!  # save can be used either to create a new record or update an existing one
    self.session_token
  end
end
