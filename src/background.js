chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("DOGIFY INSTALLATION COMPLETE. DOGIFICATION SHALL NOW COMMENCE.");
  });

   new chrome.declarativeContent.ShowPageAction()
});
