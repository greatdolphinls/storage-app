// // import { app, BrowserWindow, ipcMain } from 'electron'
// const nativeImage = require('electron').nativeImage
// const path = require('path')
// const http = require('http')
// const express = require('express')
// const expressApp = express()
// const cors = require('cors')
// const router = express.Router()
// let fileFolder

// // ipcMain.on('folder', (event, folder) => {
// //   fileFolder = folder
// // })

// expressApp.use(cors())

// router.get('/file/:name', function (req, res) {
//   let filename = fileFolder + path.sep + req.params.name
//   console.log('Serving file:', filename)
//   res.sendFile(filename)
// })

// expressApp.use('/', router)

// http.createServer(expressApp).listen(8000)

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/files'));

app.listen(3000);