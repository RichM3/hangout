class UserGroup < ApplicationRecord
    validates :user_id, :group_id, pressence: true, uniqueness: true

  has_many :joined_groups
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
  has_many :joined_groups
    primary_key: :id,
    foreign_key: :group_id,
    class_name: :Group

end
