const { remote } = require('electron');
const { BrowserWindow } = remote;
const { dialog } = remote;
const fs = require('fs');
const path = require('path');



window.dialog = function(){
	
	return dialog;
}

window.fs = function(){
  return fs;
}

window.path = function(){
	return path;	
}




// / In the Renderer process
// const { ipcRenderer } = require('electron')

// let message = "Hola Luis";
// let Channel = ""


// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"




