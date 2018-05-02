class RpsController < ApplicationController
  def play
    
  end

  def result
    @rails_throw = ['rock', 'scissors', 'paper'].shuffle.first

   
    if params[:throw] == @rails_throw
      @message = 'draw'
      @icon = "far fa-meh"
    elsif params[:throw] == 'rock' && @rails_throw == 'paper'
      @message = 'Smothered! The Rails Ghost Got You.'
      @icon = "fas fa-hand-paper"
    elsif params[:throw] == 'scissors' && @rails_throw == 'rock'
      @message = 'Crushed! The Rails Ghost Got You.'
      @icon = "fas fa-hand-rock"
    elsif params[:throw] == 'paper' && @rails_throw == 'scissors'
      @message = 'Snipped! The Rails Ghost Got You.'
      @icon = '<i class="fas fa-hand-peace"></i>'
    else
      @message = 'Hooray! You Beat The Rails Ghost.'
      case params[:throw]
      when 'rock'
        @icon = "far fa-hand-rock"
      when 'paper'
        @icon = "far fa-hand-paper"
      else
        @icon = "far fa-hand-peace"
      end
    end
    
  end
  
end