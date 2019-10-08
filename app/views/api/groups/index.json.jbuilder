# json.extract! @groups, :id
#, :groupname, :description, :location, :leaderId
# json.extract! @groups
#, :groupname
# json.extract! user, :id, :username, :email

json.groups do
        # debugger
        @groups.each do |group|
                # debugger
                json.set! group.id do
                        # debugger
                        json.extract! group, :id, :groupname, :description, :location, :leader_id
                end
        end
end

# json.joined_groups do 
#     json.array! user.joined_groups.pluck(:id)
# end
