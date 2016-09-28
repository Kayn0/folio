require 'sinatra'

get '/' do
  erb :index, layout: :main_layout
end