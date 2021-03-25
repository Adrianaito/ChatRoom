import consumer from "./consumer";

  // const messages = document.getElementById('messages');
  // console.log(messages)
  // const init = () => {
  //   messages.scrollTo(0,messages.body.scrollHeight);
  // };
  // window.setTimeout(init, 50);

function initChatroomCable() {
  const messagesContainer = document.getElementById('messages');
  // console.log('test');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(data) {
        console.log(data); // called when data is broadcast in the cable
        messagesContainer.insertAdjacentHTML('beforeend', data);
      },
    });
  }
}

export { initChatroomCable };

