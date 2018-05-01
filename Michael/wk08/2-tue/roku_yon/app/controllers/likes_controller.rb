class LikesController < ApplicationController

  def create
    redirect_to '/login' unless logged_in?
    
    like = Like.new
    like.user_id = current_user.id
    like.dish_id = params[:game_id]
    if like.save
      redirect to("/games/#{ params[:game_id] }")
    end
  end

  def destroy
  end

end
