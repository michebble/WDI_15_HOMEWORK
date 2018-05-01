Rails.application.routes.draw do
  resources :likes
  resources :user
  resources :games
  # resources :likes


  get '/', to: 'games#index'

  post '/likes', to: 'likes#create'
  delete '/likes', to: 'likes#destroy'
  
  

  get '/login', to: 'session#new'
  post '/session', to: 'session#create'
  delete '/session', to: 'session#destroy'
  

  get '/about', to: 'pages#about_us'

  


 

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
