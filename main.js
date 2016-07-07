const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  if (process.env.NODE_ENV === 'production') {
      mainWindow.loadURL(`file://${__dirname}/dist/index.html`)
  } else {
      mainWindow.loadURL('http://localhost:8080');
  }
  //mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
