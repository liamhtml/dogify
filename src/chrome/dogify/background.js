
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({option1: '1'}, function() {
    console.log("DOGIFY INSTALLATION COMPLETE. DOGIFICATION SHALL NOW COMMENCE.");
  });

     new chrome.declarativeContent.ShowPageAction()
  });
