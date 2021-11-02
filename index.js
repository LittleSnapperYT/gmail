const electron = require("electron")
const {app, BrowserWindow} = electron
var request = require('request');

let mainwindow

app.on('ready', () => {
    mainwindow = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true
    })

    try {
        //credit for this code to https://stackoverflow.com/questions/45932650/how-to-check-if-a-url-or-a-webservice-is-alive-in-nodejs
        var website = "gmail",
        ext = "com";

        request('https://isitdownorjust.me/'+ website +'-' + ext + '/', function (error, response, body) {

        if(error){
            mainwindow.loadFile("pages/error.html")
        }

        if(body.match('seems to be working.')){
            mainwindow.loadURL("https://gmail.com")
        }else{
            mainwindow.loadFile("pages/error.html")
        }
        });
        mainwindow.loadURL("https://gmail.com")
    }
    catch {
        mainwindow.loadFile("pages/error.html")
    }
})