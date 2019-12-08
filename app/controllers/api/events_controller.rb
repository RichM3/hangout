class Api::EventsController < ApplicationController

    # def new
    # end

    def create
        debugger
        @event = Event.new(event_params)
        debugger
        
        if @event.save!
        # debugger
            render "api/events/show"
        else
        # debugger
            render json: @event.errors.full_messages, status: 422
        end
    end

    def index
        debugger
        @events = Event.all
        debugger
        render "api/events/index"
    end

    # def show
    #     # debugger
    #     # group_id = Group.find(params[:id])
    #     # group_id2 = Group.find(get_group_id)
    #     # puts get_group_id
    #     debugger
    #     @events = Event.all
    #     # render "api/groups/show"
    #     # debugger
    #     render :show
    # end

    # # def edit
    # #     @group = Group.find(params[:id])
    # # end

    # def update
    #     @group = Group.find(params[:id])

    #     if @group.update_attributes(group_params)
    #         render "api/groups/show"
    #     else
    #         render json: @groups.errors.full_messages, status: 422
    #     end
    # end

    # def destroy
    #     @group = Group.find(params[:id])
    #     @group.destroy
    #     # render :index
    # end


    # # Custom Routes for the Usergroup memberships table - Add and Remove
    # def create_membership
    #     @group = Group.find(params[:id])
    #     @group.members << current_user
    #     # render :show
    # end

    # def remove_membership
    #     @group = Group.find(params[:id])
    #     @group.members.delete(current_user)
    #     # render :show
    # end


    private
    def event_params
        params.require(:event).permit(:eventname, :description, :location, :starttime, :endtime, :group_id)
    end

    def get_group_id
        params.require(:event).permit(:groupId)
    end

end
