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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
		.animate({
			'left':'300px'},500,
			function(){
				$(this).hide();
				$(this).css('left','-152px');
			}
		);
	})
	.mouseup(function(){
		console.log('mouseup');
		$('ryu-ready').show();
		$('.ryu-throwing').hide();
		//ryu goes back to his ready position
	});
	$(document).on('keydown',function(q){
		if(q.which==88){
			$('.ryu-ready').hide()
			$('.ryu-cool').show()
		}
});
	$(document).on('keyup',function(q){
		if(q.which==88){
			$('.ryu-ready').show()
			$('.ryu-cool').hide()
		}
});
});

function playHadouken (){
	$('#hadouken-sound')[0].volume = 0.25;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();	
};
