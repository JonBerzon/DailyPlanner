class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['Wrong credentials entered! Please try again.'], status: 401
    else
      login!(@user)
    #   render 'api/users/show';
        render json: { message: 'login successful.'}
    end
  end

  def destroy
    logout!
    render json: { message: 'Logout successful.' }
  end
end