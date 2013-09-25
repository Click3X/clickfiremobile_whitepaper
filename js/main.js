jQuery( function($){

	console.log("welcome to the show.");

	$("a:not(.pdf-download)").click(function($e){ console.log("not pdf"); _gaq.push(['_trackEvent', 'ClicksFired', 'Click', 'Push back to ClickFireMedia.com']); });
	$("a.pdf-download").click(function($e){ console.log("pdf download"); _gaq.push(['_trackEvent', 'ClicksFired', 'Download', 'White Paper PDF Download']); });
});
