json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :eventname, :description, :location, :starttime, :endtime, :group_id
            json.rsvpIds event.rsvps, :id, :user_id, :event_id, :attending
        end
    end
end
