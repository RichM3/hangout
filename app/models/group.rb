# == Schema Information
#
# Table name: groups
#
#  id          :bigint           not null, primary key
#  groupname   :string           not null
#  description :text             not null
#  location    :string           not null
#  leader_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Group < ApplicationRecord
    validates :groupname, presence: true, uniqueness: true
    validates :leader_id, presence: true

    # code to attach one photo from to the model
    has_one_attached :photo

    # This code ensures a photo is attached to every group or an error will occur
    def ensure_photo
        unless self.photo.attached?
            errors[:photo] << "must be attached"
        end
    end



    


    has_many :events,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Event

    belongs_to :leader,
        primary_key: :id,
        foreign_key: :leader_id,
        class_name: :User
        
    has_many :memberships,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Usergroup,
        dependent: :destroy

    has_many :members,
        through: :memberships,
        source: :user

end

