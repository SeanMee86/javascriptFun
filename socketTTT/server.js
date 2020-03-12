const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static('static'));

const PORT = process.env.PORT || 5000;
const expressServer = app.listen(PORT, console.log(`Listening on port: ${PORT}`));
const io = socketio(expressServer);

io.on('connection', (socket) => {
    socket.on('playerSelectionToServer', player => {
        io.emit('playerSelectionToClient', {
            player,
            message: 'Opponent Has Selected'
        })
    });
    socket.on('updateBoard', board => {
        console.log(board);
        io.emit('sendUpdate', board);
    })
    socket.on('disconnect', () => {
        io.emit('playerDisconnect')
    })
});