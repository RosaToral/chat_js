//variable que manda todas las peticiones al servidor
const socket = io(); //Si marca error, poner como atributo la dirección web del dominio

//DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

btn.addEventListener('click', function(){
	/*socket.emit('chatMessage', {
		username: username.value;
		message: message.value;
	});*/
alert("hello");

});
