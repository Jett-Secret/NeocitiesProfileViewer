browser.browserAction.onClicked.addListener((tab) => {
  let url = tab.url;
  const re = new RegExp(".*://\\w*\.neocities\.org/.*");
	if(!url.match(re))
		return;
	
	url = url.substring(url.indexOf("://")+3)
	url = url.substring(0,url.indexOf(".neocities.org/"))
	url = "https://www.neocities.org/site/"+url;
	console.log(url);
	browser.tabs.create(
	{"active":true,"url":url}
)
		
})