/*
**  Nuxt
*/
const http = require('http')
const { Nuxt, Builder } = require('nuxt')
let config = require('./nuxt.config.js')
config.rootDir = __dirname // for electron-builder
// Init Nuxt.js
const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)
const server = http.createServer(nuxt.render)
// Build only in dev mode
if (config.dev) {
	builder.build().catch(err => {
		console.error(err) // eslint-disable-line no-console
		process.exit(1)
	})
}
// Listen the server
server.listen()
const _NUXT_URL_ = `http://localhost:${server.address().port}`
console.log(`Nuxt working on ${_NUXT_URL_}`)

/*
** Electron
*/
const {app, BrowserWindow, ipcMain} = require('electron');
const {download} = require('electron-dl');
const path = require('path');
const url = require('url');
const fs = require('fs');

ipcMain.on('download', (event, arg) => {
	const dirPath = path.join(__dirname, 'server/files');
	fileUrl = arg.url;
  try {
    fs.mkdirSync(dirPath);
  } catch (e) {
    console.log("path already exists");
  }
  
	const opts = {
    saveAs: false,
    directory: dirPath,
    openFolderWhenDone: false
	};
	
	download(win, fileUrl, opts)
		.then(dl => console.log(dl.getSavePath()))
		.catch(console.error);
  // Try to download a set of files I know exist
  // [
  //   "https://gist.githubusercontent.com/mbostock/4060606/raw/5bcd32917b5df7183f6737099a4c8590acb0f5fc/.block",
  //   "https://gist.githubusercontent.com/mbostock/4060606/raw/f00e77314966d06cb56b1a46e776529b647d9552/README.md",
  //   "https://gist.githubusercontent.com/mbostock/4060606/raw/9841cf6f5ba1e72ae8f9c689e8291ca2e942568a/index.html",
  //   "https://gist.githubusercontent.com/mbostock/4060606/raw/3f2f45d819ae639f06f971881bd62d53e6dd6c28/thumbnail.png",
  //   "https://gist.githubusercontent.com/mbostock/4060606/raw/dfc657a8d193fa47c56af0bd5e50606b18d171c9/unemployment.tsv"
  // ].forEach((fileUrl) => {
  //   console.log(fileUrl);
  //   download(win, fileUrl, opts).then(dl => console.log(dl.getSavePath()))
	// })
})

let win = null // Current window
// const electron = require('electron')
// const path = require('path')
// const app = electron.app

const newWin = () => {
	win = new BrowserWindow({
		icon: path.join(__dirname, 'static/icon.png')
	})
	win.maximize()
	win.on('closed', () => win = null)
	if (config.dev) {
		// Install vue dev tool and open chrome dev tools
		const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
		installExtension(VUEJS_DEVTOOLS.id).then(name => {
			console.log(`Added Extension:  ${name}`)
			win.webContents.openDevTools()
		}).catch(err => console.log('An error occurred: ', err))
		// Wait for nuxt to build
		const pollServer = () => {
			http.get(_NUXT_URL_, (res) => {
				if (res.statusCode === 200) { win.loadURL(_NUXT_URL_) } else { setTimeout(pollServer, 300) }
			}).on('error', pollServer)
		}
		pollServer()
	} else { return win.loadURL(_NUXT_URL_) }
}
app.on('ready', newWin)
app.on('window-all-closed', () => app.quit())
app.on('activate', () => win === null && newWin())
