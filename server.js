// https://www.youtube.com/watch?v=Ru3Rj_hM8bo&feature=youtu.be

const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()

// app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

app.listen(port)
console.log('Server started on port', port)