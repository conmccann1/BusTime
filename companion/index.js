import * as messaging from "messaging";
import { settingsStorage } from "settings";

messaging.peerSocket.onopen = function() {
  sendMessage();
}

messaging.peerSocket.onerror = function(err) {
  console.log("Connection error: " + err.code + "-" + err.message)
}

function sendMessage() {
  var data = "hello boss"
     
    
    
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data)
  }
  
}
