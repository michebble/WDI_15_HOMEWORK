require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  @title = "Check your Stocks"
  if params[:stock_symbol] == ""
    redirect to('/')
    @stock_symbol= ""
    @company_name= ""
    @latest_price = ""
  elsif params[:stock_symbol] != nil
    stock = StockQuote::Stock.quote(params[:stock_symbol])
    @stock_symbol = "('#{stock.symbol}')"
    @company_name = stock.company_name
    @latest_price = stock.latest_price
  end
  erb :index
  
  # if params[:stock_symbol] != ""
  # @stock = StockQuote::Stock.quote(params[:stock_symbol])
  # else
  #   #@stock = nil
  #   redirect to('/')
  # end
  # erb :index
end






get '/about' do
  @title = "ABOUT"
  erb :about
end