#compares dates here to ensure events with startDate before inDate are excluded

json.rsvps do
    @rsvps.each do |rsvp|
        json.set! rsvp.id do
            json.extract! rsvp, :id, :user_id, :event_id, :attending
        end
    end
end
