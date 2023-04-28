"use strict";

require('dotenv').config();

const Monitor = require('ping-monitor')
const express = require('express');
const server = express();

const Hangbot = require('./hangbot.js')
//const Musicbot = require('./musicbot.js')

server.all('/', (req, res) => {
  res.send('<h2>Server is ready!</h2>');
});

server.get('/records.js', function(req, res) {
  res.sendFile(__dirname + "/records.js");
});

server.listen(process.env.EXPRESS_PORT, () => {
    console.log('Server Ready.');
  });


const myMonitor = new Monitor({
  address: process.env.PING_TARGET,
  title: process.env.PING_TARGET,
  interval: 1
});

myMonitor.on('up', function (res, state) {
    console.log('Yay!! ' + state.address + ' is up.');
});
myMonitor.on('down', function (res, state) {
  console.log('Oh Snap!! ' + state.address + ' is down! ' + state.statusMessage);
});
myMonitor.on('restored', function (res, state) {
  console.log(state.address + ' has been restore');
});
myMonitor.on('stop', function (res, state) {
  console.log(state.address + ' monitor has stopped.');
});
myMonitor.on('timeout', function (error, res) {
  console.log(error);
});
myMonitor.on('error', function (error) {
  console.log(error);
});
