
json.groups do
        @groups.each do |group|
                json.set! group.id do
                        json.extract! group, :id, :groupname, :description, :location, :leader_id
                        #beginning of my changes on 11/6
                        # json.memberIds group.membership_ids   #pluck(:id)
                        json.memberIds group.members, :id, :username, :email  #_ids   #s.username  #hips.ids   #pluck(:id)
                end
        end
end

