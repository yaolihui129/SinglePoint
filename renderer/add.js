const { ipcRenderer} = require('electron')
const { $ } = require('./helper.js')
const path = require('path')

$('select-music').addEventListener('click',()=>{
	ipcRenderer.send('open-music-file')
})

const renderListHTML = (pathes)=>{
	const musicList = $('musicList')
	const musicItemHTML = pathes.reduce((html,music) =>{
		html += '<li class="list-group-item">${path.basename(music)}</li>'
		return html
	},'')
	musicList.innerHTML = '<ul class="list-group">${musicItemHTML}</ul>'
}

ipcRenderer.on('selected-file',(event,path)=>{
	if(Array.isArray(path)){
		console.log(path)
		renderListHTML(path)
	}
})
