require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

require_relative'db_config'
require_relative'models/movie'

# add a check when searching to see if the movie is in the local db
# if it's not seaerch with the api, cache first search
# else pull it from the db
#


$page_counter

get "/" do
  redirect to('/index')
end

get '/index' do
  @page_title = "Movie Shock"
  erb :index 
end

get '/search' do
  @search_request = params[:name]
  if @search_request[-1] == " "
    @search_request.strip!
  end

  url = "http://omdbapi.com/?apikey=2f6435d9&page=#{$page_counter}&s=#{@search_request}"
  result = HTTParty.get(url)
  if result["Response"] == "False" 
    redirect to('/index')
  else
    @search_result = result.parsed_response["Search"]
    @search_total = result.parsed_response["totalResults"]
    date = Time.new.to_s

    File.open('search_log.txt', 'a+') do |file|
      line = "@#{date}, searched for #{@search_request}: Found #{@search_total} matches"
      file.puts line

    end
  end

  erb :search
end


get '/movie' do

  url = "http://omdbapi.com/?apikey=2f6435d9&i=#{params[:id]}"
  result = HTTParty.get(url)

  if result["Response"] == "False"
    redirect to('/index')
  else
    @movie = result.parsed_response
    # @movie = result.parsed_response["Poster"]
    # @movie_title = result.parsed_response["Title"]
    # @movie_year = result.parsed_response["Year"]
    # @movie_genre = result.parsed_response["Genre"]
    # @movie_rated = result.parsed_response["Rated"]
    # @movie_runtime = result.parsed_response["Runtime"]
    # @movie_plot = result.parsed_response["Plot"]
    
    @page_title = "Movie Shock - #{@movie_title}"

    erb :movie
  end
end


get '/about' do
  @page_title = "About Movie Shock"
  erb :about
end