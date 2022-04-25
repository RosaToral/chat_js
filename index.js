const SocketIO = require("socket.io");
const express = require("express");
const path = require("path");

const {socketService} = require('./services/chat.service');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Se asigna un puerto: el puerto que encuentre o el puerto 3000
app.set('port', process.env.PORT || 3000);

//archivos estáticos: no cambian los archivos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor
const server = app.listen(app.get('port'), () => console.log("server on port: ", app.get('port')));

//WebSockets
const io = SocketIO(server);

socketService(io);