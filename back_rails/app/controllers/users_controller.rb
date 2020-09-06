class UsersController < ApplicationController
  def index
    @user = User.all
    render :json => @user
  end

  def show
    @user = User.find(params[:id])
    render :json => @user
  end
  
  def create
    @user = User.new(user_params)
    @user.save
  end
  
  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    @user.save
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :image_url, :sns_url_fb, :sns_url_tw, :prafile)
  end
end
