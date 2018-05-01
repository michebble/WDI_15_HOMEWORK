class GamesController < ApplicationController

  def new
  end

  def create
    game = Game.new
    game.descriptions = params[:description]
    game.title = params[:title]
    game.image_url = params[:image_url]
    game.save
    redirect_to "/games/#{ game.id }"
  end

  def show
    @game = Game.find(params[:id])
  end

  def destroy
    game = Game.find(params[:id])
    game.destroy
    redirect_to '/'
  end

  def edit
    @game = Game.find(params[:id])
  end

  def update
    game = Game.find(params[:id])
    game.descriptions = params[:description]
    game.title = params[:title]
    game.image_url = params[:image_url]
    game.save
    redirect_to "/games/#{game.id}"
  end

  def index
    @games = Game.all
  end

end
