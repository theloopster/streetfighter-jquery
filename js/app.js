$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	$('.ryu').mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function(){
		console.log('mousedown');
		//play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show()
	})
	.mouseup(function(){
		console.log('mouseup');
		$('ryu-ready').show();
		$('.ryu-throwing').hide();
		//ryu goes back to his ready position
	});
});