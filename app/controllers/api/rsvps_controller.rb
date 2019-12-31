class Api::RsvpsController < ApplicationController

    # Will use create when leader creates event
    # Will use when use checks "attending" flag on component
    def create
        @rsvp = Rsvp.new(rsvp_params)

        if !(@rsvp.save!)
            flash.now[:errors] = @rsvp.errors.full_messages
        end

        # if @rsvp.save!
        #     render "api/rsvps/show"
        # else
        #     flash.now[:errors] = @rsvp.error.full_messages
        #     # render json: @rsvp.errors.full_messages, status: 422
        # end
    end

    def index
        @rsvps = current_user.rsvps
        render "api/rsvps/index"
        # @rsvps = Rsvp.find([:event_id])
    end

    # def fetchRsvp
    #     @rsvps = current_user.rsvps

    #     if @rsvps.length > 1
    #         render "api/rsvps/index"
    #     end

    #     # @rsvps.each do |rsvp| 
    #     #     if (rsvps.user_id == current_user)
    #     #         return rsvp
    #     #     end
    #     # end

    #     # return []
    # end

    # def show
    #     @rsvp = Rsvp.find(params[:id])

    #     if @rsvp
    #         # Attending
    #     else
    #         # Not Attending
    #     end
    # end

    # Will update once created and user selects the attending / not attending flags
    def update
        debugger
        @rsvp = Rsvp.find(params[:id])
        debugger

        # if !(@rsvp.update_attributes!(attending: "false"))
        #     flash.now[:errors] = @rsvp.errors.full_messages
        # end


        if @rsvp.update_attributes!(rsvp_params)
            debugger
            puts "wtf"
        else
            flash.now[:errors] = @rsvp.errors.full_messages
        end

        # if (@rsvp.update_attributes(rsvp_params))
        #     render "api/rsvp/show"
        # else
        #     flash.now[:errors] = @rsvp.error.full_messages
        # end
    end

    private
    def rsvp_params
        params.require(:rsvp).permit(:user_id, :event_id, :attending)
    end

end
