
json.groups do
        # debugger
        @groups.each do |group|
                # debugger
                json.set! group.id do
                        # debugger
                        json.extract! group, :id, :groupname, :description, :location, :leader_id
                        #beginning of my changes on 11/6
                        #json.memberIds group.joined_groups.pluck(:user_id)
                end
        end
end

