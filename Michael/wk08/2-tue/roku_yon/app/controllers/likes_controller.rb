class LikesController < ApplicationController

  def create
    if User.find_by(id: session[:user_id])
      
      like = Like.new
      like.user_id = session[:user_id]
      like.game_id = params[:game_id]
      if like.save
        redirect_to "/games/#{ params[:game_id] }"
      end
    end
  end

  def destroy
  end

end
