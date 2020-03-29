
json.groupNames do
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

json.eventNames do
    @events.each do |event|
        json.set! event.id do
                json.extract! event, :id, :eventname, :description, :starttime, :endtime, :group_id, :lat, :lng, :location
                json.rsvpIds event.rsvps, :id, :user_id, :event_id, :attending
        end
    end
end

