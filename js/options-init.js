
//hmmm, interesting
//jQuery doesn't fire the onload event inside the XUL options dialog, nor any chrome:// based page (even html ones)
//$(Lazarus.Options.init); //fails :(

$(window).on('load',function(){
	Lazarus.Options.init();

  //firefox can open the options in a separate window

  if (Lazarus.platform == "firefox" && window.sizeToContent && window.opener && window.opener !== window){
    setTimeout(window.sizeToContent, 1);
  }

});
