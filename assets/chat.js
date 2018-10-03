
var socket = io()

// emit a new chatMessage event from the client......
function submitfunction() {
  let from = $('#user').val()
  const message = $('#m').val()
  if (message !== '') {
    socket.emit('chatMessage', from, message)
  }
  // what language and selector is used below?
  // set the value to an empty string and
  // focus on the message box again
  $('#m').val('').focus()
  return false
}

// emit a new notifyUser event from the client.........
function notifyTyping() {
  const user = $('#user').val()
  socket.emit('notifyUser', user)
}

// how to react to a chatMessage event.................
socket.on('chatMessage', function (from, msg) {
  const me = $('#user').val()
  const color = (from === me) ? 'green' : '#009afd'
  from = (from === me) ? 'Me' : from
  $('#messages').append('<li><b style="color:' + color + '">' + from + '</b>: ' + msg + '</li>')
})

// how to react to a notifyUser event.................
socket.on('notifyUser', function (user) {
  const me = $('#user').val()
  if (user !== me) {
    $('#notifyUser').text(user + ' is typing ...')
  }
  // 10 seconds after typing stops, set the notify text to an empty string
  setTimeout(function () { $('#notifyUser').text('') }, 10000)
})

// when will this function get executed?
$(function () {
  const name = makeid()
  $('#user').val(name)
  // emit a chatMessage event from the System along with a message
  socket.emit('chatMessage', 'System', '<b>' + name + '</b> has joined the discussion')
})

// utility function to create a new random user name....
function makeid() {
  let text = ''
  const possible = 'abcdeghijklmnoprstuwxy'
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}
