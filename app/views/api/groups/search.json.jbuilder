# debugger
json.search do
        @groups.each do |group|
                json.set! group.id do
                        json.extract! group, :id, :groupname, :description, :location, :leader_id
                        if (group.photo.attached?)
                                json.photoUrl url_for(group.photo)
                        else
                                json.photoUrl "NA"
                        end
                        json.memberIds group.members, :id, :username, :email
                end
        end
end
# debugger
