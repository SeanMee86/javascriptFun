const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
});

const PORT = process.env.PORT || 5000;
const expressServer = app.listen(PORT, console.log(`Listening on port: ${PORT}`));
const io = socketio(expressServer);

io.on('connection', (socket) => {
    console.log('I am connected');
    socket.on('testing', msg => {
        io.emit('testingWorked', msg);
    })
});