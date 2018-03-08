const electron = require('electron');
const {app, BrowserWindow} = electron;
const path = require('path');
const url = require('url');
let mainWindow;
function createWindow () {
    mainWindow = new BrowserWindow({
        minWidth: 993,
        minHeight: 800,
        width: 993,
        height: 800
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

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