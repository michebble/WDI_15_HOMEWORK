Rails.application.routes.draw do
  resources :likes
  resources :users
  resources :games
  # resources :likes

  # post '/likes', to 'likes#create'
  # delete '/likes', to 'likes#destroy'
  
  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'

  get '/about', to: 'pages#about_us'
  get '/', to: 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
