class Api::EventsController < ApplicationController

    def create
        @event = Event.new(event_params)
        
        if @event.save!
            render "api/events/show"
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def index
        @inDate = DateTime.parse(get_event_date["date"]).to_date.to_s
        @events = current_user.events
        render "api/events/index"
    end

    def edit
        @event = Event.find(params[:id])
        render :show
    end

    def update
        @event = Event.find(params[:id])
        if !(@event.update_attributes(event_params))
            flash.now[:errors] = @event.error.full_messages
        end

        # if @event.update_attributes(event_params)
        #     render: show
        # else
        #     flash.now[:errors] = @event.error.full_messages
        #     render: show
        # end
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
        render :show
    end

    # Custom method for getting group events
    def group_events
        @group = Group.find(params[:groupId])
        @events = @group.events
        render "api/events/group_events"
    end

    private
    def event_params
        params.require(:event).permit(:eventname, :description, :location, :starttime, :endtime, :group_id)
    end

    def get_event_date
        params.require(:event).permit(:date)
    end

    def get_event_id
        params.require(:event).permit(:eventId)
    end

end
