$(document).ready(function(){
	$('.tabs li a:first').addClass('active');
	$('.page-content').hide();
	$('.page-content:first').show();

	$('.tabs li a').click(function(){
		$('ul.tabs li a').removeClass('active');
		$(this).addClass('active');
		$('.page-content').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});