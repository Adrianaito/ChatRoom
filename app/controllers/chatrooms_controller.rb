class ChatroomsController < ApplicationController
  def show
    @chatroom = Chatroom.find(params[:id])
    @messages = Message.all
    @message = Message.new
  end
end
