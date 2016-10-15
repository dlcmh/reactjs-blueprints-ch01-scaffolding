var express = require("express");
var browserify  = require('browserify-middleware');
var babelify = require("babelify");
var browserSync = require('browser-sync');
var app = express();
var port = process.env.PORT || 8080;

// This sets up Browserify to transform all code with that of the file extension
// `.jsx` with Babelify. The stage 0 configuration means that we want to use
// experimental code that has yet to be approved by the EcmaScript committee.
browserify.settings ({
  transform: [babelify.configure({
  })],
  presets: ["es2015", "react"],
  extensions: ['.js', '.jsx'],
  grep: /\.jsx?$/
});

// serve client code via browserify
// We want to reference our JavaScript bundle with
// `<script src="bundle. js"></script>` in our `index.html` file.
// When the web server notices a call for this file, we tell the server
// to send the browserified app.jsx file in our source folder instead.
app.get('/bundle.js', browserify(__dirname + '/source/app.jsx'));

// resources
// tell the web server to serve any of the listed files from `public` folder
app.get(['*.ico', '*.png', '*.jpg', '*.css', '*.map'], function (req, res) {
  res.sendFile(__dirname + "/public/" + req.path);
});

// all other requests will be routed to index.html
app.get('*', function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Run the server
// Runs the web server with `browser-sync`, proxying your app at
// the port you choose. This means that if you specify port `8080` as your
// port, your front-facing port will be a proxy port (usually `3000`),
// which will access `8080` on your behalf.
//
// We tell browser-sync to monitor all JSX files in our `source` folder and our
// CSS files in our `public` folder. Whenever these change,
// `browser-sync` will update and refresh the page. We also tell it to ignore
// all the files in the `node_modules` folder. This is generally wise to do
// because the folder will often contain thousands of files, and you don't want
// to waste time waiting for these files to be scanned.
app.listen(port,function(){
  browserSync({
    proxy: 'localhost:' + port,
    files: ['source/**/*.{jsx,js}','public/**/*.{css}'],
    options: {
      ignored: 'node_modules'
    }
  });
});
