$(document).ready(function(){
	$('#first').mouseenter(function(){
		$(this).css('background-color', "#4d4d4d");
		$('#first > a').css('color', "white");
	});
	$('#second').mouseenter(function(){
		$(this).css('background-color', "#4d4d4d");
		$('#second > a').css('color', 'white');
	});
$('#third').mouseenter(function(){
		$(this).css('background-color', "#4d4d4d");
		$('#third > a').css("color", "white");
	});
$('a > img').mouseenter(function(){
		$(this).css({ boxShadow: '1px 3px 60px #4d4d4d' });
	});

	$('.highlighted').mouseleave(function(){
		$(this).css('background-color', "#BABABA");
		$('h3 > a').css('color', '#4d4d4d');
	});
	$('a > img').mouseleave(function(){
		$(this).css({boxShadow: '0 10px 8px #4d4d4d'});
	});

    });