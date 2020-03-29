# debugger

# json.searchGroups do
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
# debugger
        # @events.each do |event|
        #         json.set! event.id do
        #     # strftime("%F") formats the date - this examples uses The ISO 8601 date format (%Y-%m-%d)
        #         #     checkDate = event.starttime.strftime("%F")
        #         #     if @inDate <= checkDate
        #                 json.extract! event, :id, :eventname, :description, :starttime, :endtime, :group_id, :lat, :lng, :location
        #                 json.rsvpIds event.rsvps, :id, :user_id, :event_id, :attending
        #         #     end
        #         end
        # end

end
# debugger

# Need to find a way to bundle these groups into a search
json.eventNames do
    @events.each do |event|
        json.set! event.id do
            # strftime("%F") formats the date - this examples uses The ISO 8601 date format (%Y-%m-%d)
        #     checkDate = event.starttime.strftime("%F")
        #     if @inDate <= checkDate
                json.extract! event, :id, :eventname, :description, :starttime, :endtime, :group_id, :lat, :lng, :location
                json.rsvpIds event.rsvps, :id, :user_id, :event_id, :attending
        #     end
        end
    end
end

