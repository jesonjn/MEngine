
function init(param) {
    sendToWebView("page_start");
}

function receiveFromWebView(data) {
    MLog("app.js 1 recv data=" + data);
    if (data == "onload" || data == "jump") {
        globalVarWrite("key1" , "writeToGlobal");
        sendToWebView("you should do something to refresh ui");
        jumpTo("bundle2", "some params");
    } else {
        MLog("app.js MLog " + data);
        MLog("app.js MLog jumpTo bundle2");
    }
}
