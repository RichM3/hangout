class Api::RsvpsController < ApplicationController

    def create
        @rsvp = Rsvp.new(rsvp_params)

        if !(@rsvp.save!)
            flash.now[:errors] = @rsvp.errors.full_messages
        end
    end

    def index
        @rsvps = current_user.rsvps
        render "api/rsvps/index"
    end

    def update
        @rsvp = Rsvp.find(params[:id])
        if !(@rsvp.update_attributes!(rsvp_params))
            flash.now[:errors] = @rsvp.errors.full_messages
        end
    end

    private
    def rsvp_params
        params.require(:rsvp).permit(:user_id, :event_id, :attending)
    end

end
