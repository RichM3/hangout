Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  # Without these routes you get a 4094 server error!!!
  namespace :api, defaults: {format: "json"} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show]

    resources :groups, only: [:create, :index, :show, :edit, :update, :destroy]
    post 'groups/create_membership/:id', to: 'groups#create_membership'
    delete 'groups/remove_membership/:id', to: 'groups#remove_membership'

    resources :events, only: [:create, :index, :show, :edit, :update, :destroy]
    get 'events/group_events/:groupId', to: 'events#group_events'
    # post 'events/create_event/:id', to: 'events#create_event'
    # delete 'events/remove_event/:id', to: 'events#remove_event'

    resources :rsvps, only: [:create, :index, :update]

  end
end

