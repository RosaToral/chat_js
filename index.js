
//se indica que se va a usar una librería
const express = require("express");
const path = require("path");
const SocketIO = require("socket.io");
//librerias para web scraping
const cheerio = require("cheerio");
const fs = require("fs");
const request = require("request");

//Se guarda un objeto de la librería
const app = express();

//Settings

//PETICIONES CON SOCKET.IO
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

//WEB SCRAPING CON CHEERIO

const images = [];

//se hace una peticion tipo http con request
//err: guarda los errores
//res: guarda la respuesta del servidor
//body: guarda el cuerpo html de la pagina solicitada
request("http://comunitaria.izt.uam.mx/EspacioVirtual/menu.html", (err, res, body) => {
	//si no hay errores y el servidor respondio bien
	if(!err && res.statusCode == 200){
		let $ = cheerio.load(body);
		//busca las etiquetas a dentro del contenedor siteTable
		let contenido = $("ul", "body");
		contenido.each( function (){
			//guarda el atributo href en la variable url de la etiqueta a actual
			var url = $(this).html();//attr("src");
			var name = $(this).attr("id");
			images.push(url);
		});
		//console.log(contenido);
	} else if (err){
		console.log(err);
	} else {
		console.log(res.statusCode);
	}
});

//comprobar que alguien está conectado
io.on('connection', (socket) => {
	console.log("new connection: ", socket.id);
	//Web scraping
//	console.log(images);
	io.sockets.emit("scraping", images);
	//Listen to the chat:message event
	socket.on('chat:message', (data) =>{
		//Emit the event chat:messagr
		io.sockets.emit("chat:message", data);
	});

	socket.on('chat:typing', (data) =>{
                socket.broadcast.emit("chat:typing", data);
        });

});
