class Group < ApplicationRecord
    validates :groupname, presence: true, uniqueness: true
    validates :leader_id, presence: true

    has_many :events


    belongs_to :leader,
        primary_key: :id,
        foreign_key: :leader_id,
        class_name: :User
        
    has_many :joined_groups,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :UserGroup

end

