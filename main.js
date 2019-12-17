// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain} = require('electron')

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
	  width: 800,
	  height: 800,
	  webPreferences: {
	    nodeIntegration:true
	  }
	})
	
	mainWindow.loadFile('./renderer/index.html')

	ipcMain.on('message',(event,arg)=>{
		  console.log(arg)
		  // event.sender.send('reply','hello from main')
		  mainWindow.send('reply','hello from main')
	})
	
})

 
 


