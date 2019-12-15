#compares dates here to ensure events with startDate before inDate are excluded

json.events do
    @events.each do |event|
        json.set! event.id do
            checkDate = event.starttime.strftime("%F")
            if @inDate <= checkDate
                json.extract! event, :id, :eventname, :description, :location, :starttime, :endtime, :group_id
            # else
            #     json.extract! []
            end
        end
    end
end
