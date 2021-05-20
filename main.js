const {app, BrowserWindow,  Menu, MenuItem, ipcMain, dialog} = require('electron')
const path = require('path')

function createWindow(){
	
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
	  nodeIntegration:true,
	  enableRemoteModule:true,
	  contextIsolation:false, 
      preload: path.join(__dirname, 'preload.js')
    }
  })


  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
  
}


app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// ipcMain.on('synchronous-message', (event, arg) => {
  // console.log(arg) // prints "ping"
  

  
// })