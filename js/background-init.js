
Lazarus.getPref('debugMode', function(debugMode){

	Lazarus.logger = new Lazarus.Logger('[lazarus]', debugMode);
	Lazarus.logger.log("initalizing background");

	chrome.extension.onRequest.addListener(Lazarus.onCallBackground);

	Lazarus.db = new Lazarus.Database("lazarus3.sqlite");

	//and finally call the "normal" initalization
	Lazarus.Background.init();
});
