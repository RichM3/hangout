json.extract! user, :id, :username, :email
json.groupIds user.led_groups.pluck(:id)







# json.joined_groups do 
#     json.array! user.joined_groups.pluck(:id)
# end
# [3,5,77,9]




# json.set! @user.id do
#    json.extract! @group, :id, :groupname, :description, :location, :leaderId
# end




# json.group do
#     json.extract! @group, :id, :title, etc
# end 
# ​
# json.members do 
#     @group.members do |member| 
#         json.set! member.id do 
#             json.extract! member, :id, :name, :whateer_else
#         end
#     end 
# end 
# ​
# ​
# json.events do
#     @group.events
#         etc etc etc
# Collapse


