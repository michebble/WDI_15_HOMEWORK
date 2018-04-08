require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

# print "Enter movie title"
# title = gets.chomp

# url = "http://omdbapi.com/?apikey=2f6435d9&t=#{title}"

# result = HTTParty.get(url)

# result.parsed_response["Title"]
#  result.parsed_response["Plot"]

@error = {"Response"=>"False", "Error"=>"Movie not found!"}

get "/" do
  redirect to('/index')
end

get '/index' do
  @page_title = "Movie Shock"
  erb :index 
end

get '/movie' do
  
  url = "http://omdbapi.com/?apikey=2f6435d9&t=#{params[:name]}"
  result = HTTParty.get(url)

  @movie_poster = result.parsed_response["Poster"]
  @movie_title = result.parsed_response["Title"]
  @movie_year = result.parsed_response["Year"]
  @movie_genre = result.parsed_response["Genre"]
  @movie_rated = result.parsed_response["Rated"]
  @movie_runtime = result.parsed_response["Runtime"]
  @movie_plot = result.parsed_response["Plot"]
  
  @page_title = "Movie Shock - #{@movie_title}"

  erb :movie
end


get '/about' do
  @page_title = "About Movie Shock"
  erb :about
end