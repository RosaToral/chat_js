
//se indica que se va a usar una librería
const express = require("express");
const path = require("path");
const SocketIO = require("socket.io");

//Se guarda un objeto de la librería
const app = express();

//Settings

//Se asigna un puerto: el puerto que encuentre o el puerto 3000
app.set('port', process.env.PORT || 3000);

//archivos estáticos: no cambian los archivos

app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor
const server = app.listen(app.get('port'), ()=>{
	console.log("server on port: ", app.get('port')); //imprime el puerto en el que trabaja
});


//WebSockets
const io = SocketIO(server);

//comprobar que alguien está conectado
io.on('connection', (socket) => {
	console.log("new connection: ", socket.id);

	//Listen to the chat:message event
	socket.on('chat:message', (data) =>{
		//Emit the event chat:messagr
		io.sockets.emit("chat:message", data);
	});

	socket.on('chat:typing', (data) =>{
                socket.broadcast.emit("chat:typing", data);
        });

});
