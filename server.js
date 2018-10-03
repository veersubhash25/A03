const express = require('express')  // require express
const app = express()  // create a request handler function
const server = require('http').createServer(app)  // use our app to create a server
const io = require('socket.io')(server) // pass in our http app server to get a Socket.io server
const path = require('path')
const port = 8081

// include the static client-side files (.html, .css, .js)
app.use(express.static(path.join(__dirname)))

// on a GET request to default page, serve up our index.html....
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../w06/assets', 'index.html'))
})

// on a connection event, act as follows (socket interacts with client)
io.on('connection', function (socket) {
  socket.on('chatMessage', function (from, msg) {  // on getting a chatMessage event
    io.emit('chatMessage', from, msg)  // emit it to all connected clients
  })
  socket.on('notifyUser', function (user) {  // on getting a notifyUser event
    io.emit('notifyUser', user)  // emit to all
  })
})

// Listen for an app request on port - use backtics with variable
server.listen(port, function () {
  console.log(`listening on http://127.0.0.1:${port}/`)
})
