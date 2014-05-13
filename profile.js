$(document).ready(function(){
	//hide all divs that aren't for the about page
	$('.education').hide();
	$('.skills').hide();

	//If the education button is clicked, hide all divs and show '.education';
	$('.educationButton').click(function(){
		$('.abouter').hide();
		$('.skills').hide();
		$('.education').show();
	});
	//If the skills button is clicked, hide current div and show '.skills';
	$('.skillsButton').click(function(){
		$('.abouter').hide();
		$('.education').hide();
		$('.skills').show();
	});
	//If the about button is clicked, hide current div and show '.about';
	$('.aboutButton').click(function(){
		$('.education').hide();
		$('.skills').hide();
		$('.abouter').show();
	});

});