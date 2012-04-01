
function handleKeyPress(e){
	chrome.extension.sendRequest({keyPressed: e.keyCode, alt: e.altKey}, function(response) {});
}

window.document.onkeydown = handleKeyPress;
