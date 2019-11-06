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

    has_many :events


    belongs_to :leader,
        primary_key: :id,
        foreign_key: :leader_id,
        class_name: :User
        
    has_many :memberships,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Usergroup

    has_many :members,
        through: :memberships

end

