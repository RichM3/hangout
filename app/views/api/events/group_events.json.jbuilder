json.events do
    @events.each do |event|
        json.set! event.id do
            json.extract! event, :id, :eventname, :description, :location, :starttime, :endtime, :group_id
            # json.groupName event.group.name
        end
    end
end
