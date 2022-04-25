const checkStatus = res => {
  // res.status >= 200 && res.status < 300
  if (res.ok) return res;
  
  throw console.log(res.statusText);
}

const socketService = (io) => {
  //comprobar que alguien está conectado
  io.on('connection', (socket) => {
    console.log("new connection: ", socket.id);

    //Evento de mensaje
    socket.on('chat:message', (data) => io.sockets.emit("chat:message", data));

    //Evento escribiendo
    socket.on('chat:typing', (data) => socket.broadcast.emit("chat:typing", data));

  });
}

module.exports = {
  checkStatus,
  socketService
}