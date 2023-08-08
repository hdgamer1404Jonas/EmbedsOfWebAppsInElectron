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
  
    win.loadURL(config.url, {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
    })
    win.setTitle(config.name)
    win.setIcon('assets/icon.png')
}

app.whenReady().then(() => {
    createWindow()
})