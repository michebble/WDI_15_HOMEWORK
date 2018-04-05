require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  if params[:stock_symbol] != nil
  @stock = StockQuote::Stock.quote(params[:stock_symbol])
  else
    @stock = nil
  end
  erb :index
end

get '/about' do
  erb :about
end