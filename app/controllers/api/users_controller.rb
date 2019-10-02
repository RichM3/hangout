class Api::UsersController < ApplicationController
  def create

    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end




# -- my code likely bad
# class Api::UsersController < ApplicationController
#   def create
#     @user = User.new(user_params)
#     # @user.password = params[:user][:password]
#     if @user.save
#       login!(@user)
#       render json: ["successful"]
#     else
#       render json: @user.errors.full_messages, status: 422
#     end
#   end

#   private 
#   def user_params
#     params.require(:user).permit(:username, :password)
#   end

# end
