const express = require('express')
const app = express()

app.get('/ping', (req, res) => {
    res.json({
		pong: true
	})
})

app.get('/time', (req, res) => {
    res.json({
		now: (new Date()).toISOString()
	})
})

module.exports = app