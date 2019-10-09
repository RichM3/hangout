# json.partial! "api/groups/group", user: @user




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

