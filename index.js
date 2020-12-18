let app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index-text.html');
  }); 

  http.listen(3000, () => {
    console.log('Connexion reussite');
  });

  io.on('connection', (socket) => {
    
    console.log( socket.client.conn.server.clientsCount + " users connected" );


    socket.on('disconnect', ()=>{
        console.log('Disconnected');
    })

    socket.on('Created', (data)=>{
      socket.broadcast.emit('Created', (data))
    })

    socket.on('chat-message', (data) => {
      socket.broadcast.emit('chat-message', (data))
    })

    socket.on('typing', (data) => {
      socket.broadcast.emit('typing', (data))
    })

    socket.on('stopTyping', (data) => {
      socket.broadcast.emit('stopTyping', (data))
    })

    socket.on('joined', (data) => {
      socket.broadcast.emit('joined', (data))
    })

    socket.on('leaved', (data) => {
      socket.broadcast.emit('leaved', (data))
    })


  });