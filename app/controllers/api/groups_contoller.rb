class Api::GroupsController < ApplicationController

    def create
        @group = Group.new(group_params)

        if @group.save! 
            render "api/groups/show"
        else
            render json: @groups.errors.full_messages, status: 422
        end        
    end

    # def destroy

    # end

    private
    def group_params
        params.require(:group).permit(:groupname, :description, :location, :leaderId)
    end

end
