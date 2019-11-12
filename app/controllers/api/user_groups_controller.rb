class Api::UsergroupsController < ApplicationController

    # before_action :enusre_logged_in

    # # def new
    # #     @usergroup = @Usergroup.new
    # # end

    # def index
    #    @usergroups = User.find(current_user.id).joined_groups
    #    render :index
    # end

    # # def show
    # #     @usergroup = User_Group.find(params[:group_id])
    # # end

    # # def edit
    # #     @usergroup = UserGroup.find(user_group_params)
    # # end

    # #Join a group
    # def create
    #     # @usergroup = UserGroup.new()
    #     # @usergroup.user_id = current_user.id
    #     # @usergroup.groupId = params[:groupId]

    #     @usergroup = Usergroup.new(user_group_params)

    #     if @usergroup.save
    #         render "api/users/show"
    #     else
    #         render json: @user.errors.full_messages, status: 422
    #     end
    # end

    # # def update
    # # end

    # # Quit a group
    # def destroy
    #     @usergroup = Usergroup.find(params[:id])
    #     @usergroup.destroy
    # end

    # private
    # def user_group_params
    #     params.require(:user_groups).permit(:userId, :groupId)
    # end

end
