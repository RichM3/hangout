class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username],
    params[:user][:password])

    if @user
      login!(@user)
      render "api/users/show"
    else
      errors = ["Invalid credentials"]
      render json: errors, status: 401
    end

  end

  def destroy
    render json: 404 if current_user.nil?
    logout!
    render json: {}
  end
end
