class Api::GroupsController < ApplicationController

    # def new
    # end

    # def create
    #     @group = Group.new(group_params)
    #     if @group.save! 
    #         render "api/groups/show"
    #     else
    #         render json: @groups.errors.full_messages, status: 422
    #     end        
    # end

    def index
        @groups = Group.all
        render "api/groups/index"
    end

    def show
        # debugger
        @group = Group.find(params[:id])
        # render "api/groups/show"
        render :show
    end

    # def edit
    #     @group = Group.find(params[:id])
    # end

    # def update
    #     @group = Group.find(params[:id])

    #     if @group.update_attributes(link_params)
    #         render "api/groups/show"
    #     else
    #         render json: @groups.errors.full_messages, status: 422
    #     end
    # end

    # def destroy
    #     @group = Group.find(params[:id])
    #     @group.destroy
    # end

    private
    def group_params
        params.require(:group).permit(:groupname, :description, :location, :leaderId)
    end

end