const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const PORT = process.env.PORT || 5000;

const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUserInRoom }= require( "./users.js");
const { use } = require('./router');
io.on('connection', (socket) => {
    console.log("A new connection!!");

    socket.on('join', ({ name, room },callback) => {
        const { error, user } = addUser({ id: socket.id, room, name });

        if (error) {
            return callback(error);
        }
        socket.emit('message', { user: 'admin', text: `${user.name} joined the room ${user.room}` });
        socket.join(use.room);
    });

    socket.on('disconnect', () => {
        console.log('User has left');
    })
});

app.use(router);

server.listen(PORT, () =>
    console.log(`Server is running at ${PORT}`)
);