#compares dates here to ensure events with startDate before inDate are excluded

json.events do
    @events.each do |event|
        json.set! event.id do
            # strftime("%F") formats the date - this examples uses The ISO 8601 date format (%Y-%m-%d)
            checkDate = event.starttime.strftime("%F")
            if @inDate <= checkDate
                json.extract! event, :id, :eventname, :description, :starttime, :endtime, :group_id, :lat, :lng, :location
                json.rsvpIds event.rsvps, :id, :user_id, :event_id, :attending
            end
        end
    end
end
