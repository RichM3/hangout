json.extract! user, :id, :username, :email, :location_id
json.groupIds user.groups.pluck(:group_id)






# json.groupIds do |id|
#     id.each do 
#         json.set! membergroups do 
#             json.extract! group, :id, :groupname, :description, :location, :leader_id
#             json.groupmemberships @user.groups.pluck(:leader_id)
#         end
#     end
# end

