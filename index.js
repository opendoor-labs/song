#!/bin/usr/env node

var fs = require('fs')
  , applescript = require('applescript')
  , express = require('express')
  , bodyParser = require('body-parser')
  , app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/play', function(req, res, next) {
  var song = req.param('song') || 'Guile';
  applescript.execFile('play.applescript', [song], function(err) {
    if (err) return next(err)
    res.send('playing')
  })
})

app.delete('/play', function(req, res, next) {
  applescript.execFile('stop.applescript', function(err) {
    if (err) return next(err)
    res.send('stopped')
  })
})

var port = process.argv[2] || 1337
app.listen(port, function() {
  console.log('Listening on 0.0.0.0:' + port)

  // downgrade process user to owner of this file
  fs.stat(__filename, function(err, stats) {
    if (err) throw err
    process.setuid(stats.uid)
  })
})
