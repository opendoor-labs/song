#!/bin/usr/env node

var applescript = require('applescript')
  , express = require('express')
  , app = express()

app.post('/play', function(req, res, next) {
  applescript.execFile('play.applescript', function(err) {
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

app.listen(1337)
