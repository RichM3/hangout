
json.groups do
        # debugger
        @groups.each do |group|
                # debugger
                json.set! group.id do
                        # debugger
                        json.extract! group, :id, :groupname, :description, :location, :leader_id
                        #beginning of my changes on 11/6
                        json.memberIds group.membership_ids   #pluck(:id)
                end
        end
end

