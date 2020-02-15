
json.groups do
        @groups.each do |group|
                json.set! group.id do
                        json.extract! group, :id, :groupname, :description, :location, :leader_id
                        # debugger
                        if (group.photo.attached?)
                                # debugger
                                json.photoUrl url_for(group.photo)
                        else
                                # puts "in else"
                                json.photoUrl "NA"
                        end
                        json.memberIds group.members, :id, :username, :email
                end
        end
end

