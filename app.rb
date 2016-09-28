require 'sinatra'

get '/index' do
  erb :index, layout: :main_layout
end