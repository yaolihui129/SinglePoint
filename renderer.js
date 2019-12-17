const { ipcRenderer} = require('electron')

window.addEventListener('DOMContentLoaded',()=>{
	ipcRenderer.send('message','hello from ipcRenderer')
	ipcRenderer.on('reply',(event,arg) => {
		document.getElementById('message').innerHTML = arg
	})
})

