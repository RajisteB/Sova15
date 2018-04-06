Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'crypto#homepage'
  get '/landing', to: 'crypto#landing'
  get '/register', to: 'crypto#register'
  get '/signup', to: 'users#register'
  get '/dashboard', to: 'dashboard#dash'
end
