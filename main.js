// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain} = require('electron')

class AppWindow extends BrowserWindow{
	constructor(config,fileLocation){
		const basicConfig={
			width: 800,
			height: 600,
			webPreferences: {
			  nodeIntegration:true
			}
		}
		// const finalConfig = Object.assign(basicConfig,config)
		const finalConfig = { ...basicConfig,...config}
		super(finalConfig)
		this.loadFile(fileLocation)
		this.once('reay-to-show',()=>{
			this.show()
		})
	}
}

app.on('ready', ()=>{
	mainWindow = new AppWindow({},'./renderer/index.html')
	ipcMain.on('add-music-window',()=>{
		  console.log('hello from index page')
		  addWindow = new AppWindow({
		    width: 500,
		    height: 400,
			parent:mainWindow
		  },'./renderer/add.html') 
	})
})

 
 


