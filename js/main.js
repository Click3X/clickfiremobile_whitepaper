jQuery( function($){

	console.log("welcome to the show.");

	//$("a:not(.pdf-download)").click(function($e){ _gaq.push(['_link', $(this).attr('href')]); return false;});
	$("a.pdf-download").click(function($e){ _gaq.push(['_trackEvent', 'O Red White Paper Events', 'PDF Download', 'White Paper PDF Download']); });
});
