# == Schema Information
#
# Table name: usergroups
#
#  id       :bigint           not null, primary key
#  user_id  :integer          not null
#  group_id :integer          not null
#

class Usergroup < ApplicationRecord
    validates :user_id, :group_id, presence: true
    # removed uniqueness constraint because on the user_id and group_id individually not together
    # validates :user_id, :group_id, presence: true, uniqueness: true
    #
    # validates_uniqueness_of :user1_id, :scope => [:user2_id] -- This maybe what I need to solve the issue

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :group,
        primary_key: :id,
        foreign_key: :group_id,
        class_name: :Group
end
