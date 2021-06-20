# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :uploads, only: %i[index create destroy]
    end
  end
  root 'uploads#index'
end
