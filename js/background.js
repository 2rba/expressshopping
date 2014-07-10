


if (!localStorage.getItem("list")) localStorage.setItem("list",JSON.stringify([]));

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('message');
        if (request.reload)
        console.log('reload');
//            checkSites();
    });