class Api::UserGroupsController < ApplicationController

    before_action :enusre_logged_in

    # def new
    #     @userGroup = @UserGroup.new
    # end

    def index
       @userGroups = User.find(current_user.id).joined_groups
       render :index
    end

    # def show
    #     @userGroup = User_Group.find(params[:group_id])
    # end

    # def edit
    #     @userGroup = UserGroup.find(user_group_params)
    # end

    #Join a group
    def create
        # @userGroup = UserGroup.new()
        # @userGroup.user_id = current_user.id
        # @userGroup.groupId = params[:groupId]

        @userGroup = UserGroup.new(user_group_params)

        if @userGroup.save
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    # def update
    # end

    # Quit a group
    def destroy
        @userGroup = UserGroup.find(params[:id])
        @userGroup.destroy
    end

    private
    def user_group_params
        params.require(:user_groups).permit(:userId, :groupId)
    end

end
