class UsersController < ApplicationController

protect_from_forgery

  def index
    @user = User.all
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    if @user = true
      render json: @user
    else
      puts 'not found'
    end
  end
  
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      puts 'error'
    end
  end
  
  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      @user.save
      render json: @user
    else
      puts 'error'
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :image_url, :sns_url_fb, :sns_url_tw, :prafile)
  end
end
