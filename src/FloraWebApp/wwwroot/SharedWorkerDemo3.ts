var count = 0;
onconnect = function (e) {
    count += 1;
    var portx = e.ports[0];
    portx.postMessage("Hello World! You are connection #" + count);
    e.ports.addEventListener("message", ReceiveMessage, false);
}

function ReceiveMessage(e) {
    if (e.data == "close") {
        while (1) {
        }
    }
    e.target.postMessage("pong"); 
}