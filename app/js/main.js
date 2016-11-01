var main = function(){

	$('#js-form-msg').on('submit', function(event){
		
		//Preventing reload
		event.preventDefault();

		//Getting Input box data
		inputBox = $(event.target).find('#msg');
		var msg = inputBox.val();

		addMsg(msg);

		inputBox.val("");

		socket.emit('client-msg', msg);


	});

	//Adds a msg to the chat msg ul
	function addMsg(msg){
		var li = $('<li>'+msg+'</li>');
		li.addClass('msg');
		$('#msg-panel').append(li);
	}

	//Connect to backend throug socket
	var socket = io.connect('http://localhost:8080');

	//Handle messages from backend
	socket.on('msg', function(data){
		console.log(data);
		addMsg(data);
	});

}


$(document).ready(main);


