class UsersController < ApplicationController
  def index
     @users = User.where(id: params[:id])
  end
end