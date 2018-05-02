class SecretController < ApplicationController

  def guess
    @numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  end

  def correct
    @secret_number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].shuffle.first

    if @secret_number == params[:guess]
      @message = 'Correct! Great Guess.'
    else
      @message = 'Too Bad. Better Luck Next Time'
    end
  end

end