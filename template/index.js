const { app, BrowserWindow } = require('electron')
const config = require('./assets/config.json')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
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