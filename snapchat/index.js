const { app, BrowserWindow } = require('electron')
const config = require('./assets/config.json')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true,
            preload: __dirname + '/preload.js'
        },
        autoHideMenuBar: true,
    })
  
    win.loadURL(config.url)
    win.setTitle(config.name)
    win.setIcon('assets/icon.png')
}

app.whenReady().then(() => {
    createWindow()
})