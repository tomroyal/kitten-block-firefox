// kittenblock for firefox q
// v1.0.0

function onUpdated(tab) {
  // console.log(`Updated tab: ${tab.id}`);
}

function onError(error) {
  // console.log(`Error: ${error}`);
}

function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {

    // check URL
    var toKittens = 0;
    var blockSites = ['www.dailymail.co.uk', 'www.express.co.uk'];
    for (var i=0; i<blockSites.length; i++) {
    		if (changeInfo.url.search(blockSites[i]) > -1) {
    			toKittens = 1;
          // console.log("Match to blocked site");
    		};
    };

    // redir if required
    if (toKittens == 1){
      var updating = browser.tabs.update(tabId, {
        active: true,
        url: "http://www.tomroyal.com/teaandkittens/blocked.php"
      });
    }
  };
}

browser.tabs.onUpdated.addListener(handleUpdated);
