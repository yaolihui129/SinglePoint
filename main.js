// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, dialog } = require('electron')


const Store = require('electron-store')
const store = new Store()
console.log(app.getPath('userData'))
store.set('unicorn','123')
console.log(store.get('unicorn'))

store.set('foo.bar',true)
console.log(store.get('foo'))


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
    const mainWindow = new AppWindow({},'./renderer/index.html')
	
	ipcMain.on('add-music-window',()=>{
		  console.log('hello from index page')
		  addWindow = new AppWindow({
		    width: 500,
		    height: 400,
			parent:mainWindow
		  },'./renderer/add.html') 
	})
	ipcMain.on('open-music-file', (event) => {
	    dialog.showOpenDialog({
	      properties: ['openFile', 'multiSelections'],
	      filters: [{ name: 'Music', extensions: ['mp3'] }]
	    }, (files) => {
			console.log(files)
	      if (files) {
	        event.sender.send('selected-file', files)
	      }
	    })
	  })
	
})

 
 


