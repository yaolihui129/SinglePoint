// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain} = require('electron')

app.on('ready', ()=>{
	mainWindow = new BrowserWindow({
	  width: 800,
	  height: 600,
	  webPreferences: {
	    nodeIntegration:true
	  }
	})
	
	mainWindow.loadFile('./renderer/index.html')

	ipcMain.on('add-music-window',()=>{
		  console.log('hello from index page')
		  addWindow = new BrowserWindow({
		    width: 500,
		    height: 400,
		    webPreferences: {
		      nodeIntegration:true
		    },
			parent:mainWindow
		  })
		  addWindow.loadFile('./renderer/add.html')
		 
	})
	
})

 
 


