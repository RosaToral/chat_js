//variable que manda todas las peticiones al servidor
const socket = io(); //Si marca error, poner como atributo la dirección web del dominio

//DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');
let welcome = document.getElementById('welcome');

btn.addEventListener('click', function(){
	//Emit the chat:message event
	socket.emit('chat:message', {
		"username": username.value,
		"message": message.value

	});
	message.value = "";
});

message.addEventListener('keydown', function(){
        socket.emit('chat:typing', username.value);
});

socket.on("chat:message", function (data) {
	actions.innerHTML = "";
	output.innerHTML += `<p>
			<strong>${data.username}</strong>:<br>
			${data.message}
			</p>`;
});

socket.on("chat:typing", function (data) {
        actions.innerHTML = `<p>
                        	${data} is typing
			</p>`;
});

socket.on("scraping", function (data) {
	//for(var i=0; i<data.length; i++){
		welcome.innerHTML = `${data}`;
	//}
});
