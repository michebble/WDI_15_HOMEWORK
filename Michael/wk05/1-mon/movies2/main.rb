require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'



@error = {"Response"=>"False", "Error"=>"Movie not found!"}

get "/" do
  redirect to('/index')
end

get '/index' do
  @page_title = "Movie Shock"
  erb :index 
end

get '/search' do
  search_request = params[:name]
  if search_request[-1] == " "
    search_request.strip!
  end

  url = "http://omdbapi.com/?apikey=2f6435d9&s=#{search_request}"
  result = HTTParty.get(url)
  if result["Response"] == "False" 
    redirect to('/index')
  else

  @search_result = result.parsed_response["Search"]
  end
  erb :search
end


get '/movie' do

  url = "http://omdbapi.com/?apikey=2f6435d9&i=#{params[:id]}"
  result = HTTParty.get(url)

  if result["Response"] == "False"
    redirect to('/index')
  else
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
end


get '/about' do
  @page_title = "About Movie Shock"
  erb :about
end