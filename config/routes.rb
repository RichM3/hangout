Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: "json"} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]

    resources :groups, only: [:create, :index, :show, :edit, :update, :destroy]
    post 'groups/create_membership/:id', to: 'groups#create_membership'
    delete 'groups/remove_membership/:id', to: 'groups#remove_membership'

  end
end

