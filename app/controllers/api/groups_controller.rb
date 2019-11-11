class Api::GroupsController < ApplicationController

    # def new
    # end

    def create
        @group = Group.new(group_params)
        
        if @group.save! 
            if @group.id
                @usergroup = Usergroup.new('user_id': @group.leader_id, 'group_id': @group.id)
            else
                lastGroupId = Group.last.id
                @usergroup = Usergroup.new(lastGroupId, @group.leader_id)
            end
            if @usergroup.save!
                render "api/groups/show"
            else
                render json: @groups.errors.full_messages, status: 422
            end
        else
            render json: @groups.errors.full_messages, status: 422
        end
    end

    def index
        @groups = Group.all
        render "api/groups/index"
    end

    def show
        @group = Group.find(params[:id])
        # render "api/groups/show"
        render :show
    end

    # def edit
    #     @group = Group.find(params[:id])
    # end

    def update
        @group = Group.find(params[:id])

        if @group.update_attributes(group_params)
            render "api/groups/show"
        else
            render json: @groups.errors.full_messages, status: 422
        end
    end

    def destroy
        @group = Group.find(params[:id])
        @group.destroy
        # render :index
    end


    # Custom Routes for the Usergroup memberships table - Add and Remove
    def create_membership
        @group = Group.find(params[:id])
        @group.members << current_user
        # render :show
    end

    def remove_membership
        @group = Group.find(params[:id])
        @group.members.delete(current_user)
        # render :show
    end


    private
    def group_params
        params.require(:group).permit(:groupname, :description, :location, :leader_id)
    end

end
