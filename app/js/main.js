var main = function(){


	$('#js-form-msg').on('submit', function(event){
		
		//Preventing reload
		event.preventDefault();

		//Getting Input box data
		inputBox = $(event.target).find('#msg');
		var msg = inputBox.val();

		addMsg(msg);

		inputBox.val("");


	});

	//Adds a msg to the chat msg ul
	function addMsg(msg){
		var li = $('<li>'+msg+'</li>');
		li.addClass('msg');
		$('#msg-panel').append(li);
	}
}


$(document).ready(main);


