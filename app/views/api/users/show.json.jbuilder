json.partial! "api/users/user", user: @user

# json.extract! user, :id, :username, :email
# json.joined_groups do 
#     json.array! user.joined_groups.pluck(:id)
# end

# json.usergroups do
#                 json.set! group.id do
#                         json.extract! group, :id, :groupname, :description, :location, :leader_id
#                         @user.groups.pluck(:group_id)
#                 end
#         end
# end


# json.groupIncluded do 
#     json.extract! @group, :id, :name, :description, :event_ids
#     json.???Ids @groups.groups.pluck(user_id in () )   .group_memberships.pluck(:member_id)
# end


