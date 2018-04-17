/*
    Unofficial SwitchCraft Chat Viewer
    © 2018 Ale32bit
    https://ale32bit.me
    License GNU GPLv3
    Online version: https://ale32bit.me/scchat
 */

// This file is just the engine for the program. check index.html out.

const electron = require('electron'); // Load electron lib
const {app, BrowserWindow} = electron; // take app and BrowserWindow from electron
const path = require('path'); // load path
const url = require('url'); // load url
const open = require("open"); // load open (this lib helps open links in default browsers)
let mainWindow; // define mainWindow
function createWindow () {
    mainWindow = new BrowserWindow({ // new Window
        width: 1160,
        height: 800,
        icon: __dirname + '/icon.ico', // The bubble speech thing icon
    });

    mainWindow.loadURL(url.format({ // load index.html
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.webContents.on('new-window', function(e, url) { // whenever you click a link with target _blank this function prevents default and open it from a browser
        e.preventDefault();
        open(url)
    });

    mainWindow.on('close', function () { // just kill it already
        app.quit();
        process.exit(0);
    });
    process.on('SIGINT', function() { // dunno why i added these 2 functions
        app.quit();
        process.exit(1);
    });
}
app.on('ready', createWindow); // when ready do all the window stuff up there