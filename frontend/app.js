chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
	id: "main_window",
    bounds: {
      width: 892,
      height: 524
    },
    resizable: false
  });
});
