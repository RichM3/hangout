json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :eventname, :description, :location, :starttime, :endtime, :group_id
        end
    end
end
