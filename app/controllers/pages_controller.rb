class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @messages = Message.all
    @message = Message.new
  end
end
