Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'pages#home'

  get '/magic/question', to: 'magic#question'
  get '/magic/answer', to: 'magic#answer'

  get '/secret/guess', to: 'secret#guess'
  get '/secret/correct', to: 'secret#correct'

  get '/rps', to: 'rps#play'
  get '/rps/throw', to: 'rps#result'

end
