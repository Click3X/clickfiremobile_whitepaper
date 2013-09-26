jQuery( function($){

	console.log("welcome to the show.");

	$("a:not(.pdf-download)").click(function($e){ _gaq.push(['_link', $(this).attr('href')]); return false;});
	
	//oc: not needed because now we have a landing page for the file download.
	//$("a.pdf-download").click(function($e){ _gaq.push(['_trackEvent', 'O Red White Paper Events', 'PDF Click Download', 'White Paper PDF Download']); });

});
