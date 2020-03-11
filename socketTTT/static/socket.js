const socket = io();

window.onload = function() {
    document.getElementById('test')
        .addEventListener('click', () => {
            socket.emit('testing', document.getElementById('input').value)
        });

    socket.on('testingWorked', msg => console.log(msg))
};
