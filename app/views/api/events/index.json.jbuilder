json.events do
    @events.each do |event|
        json.set! event.id do
            debugger
            json.extract! event, :id, :eventname, :description, :location, :starttime, :endtime, :group_id
            # json.groupName event.group.name
        end
    end
end

# json.fetchedEventIds do 
#     json.array! @events.ids
# end
