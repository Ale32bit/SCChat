const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');
const open = require("open");
let mainWindow;
function createWindow () {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: __dirname + '/icon.ico',
    });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.webContents.on('new-window', function(e, url) {
        e.preventDefault();
        open(url)
    });

    mainWindow.on('close', function () {
        app.quit();
        process.exit(0);
    });
    process.on('SIGINT', function() {
        app.quit();
        process.exit(1);
    });
}
app.on('ready', createWindow);