class Group < ApplicationRecord
    validates :groupname presence: true, uniqueness: true
    validates :leader_id presence: true

    has_many :events
    belongs_to :user;


end

