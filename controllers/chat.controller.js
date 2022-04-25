//const { chatService } = require('../services/chat.controller');
//const SocketIO = require("socket.io");

const chat (req, res) => {
  res.send();
}

const checkStatus = res => {
  if (res.ok) {
    // res.status >= 200 && res.status < 300
    return res;
  } else {
    throw console.log(res.statusText);
  }
}

module.exports = { chat, checkStatus }