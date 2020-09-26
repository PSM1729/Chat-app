import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;
const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState('');
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        
        socket = io("localhost:5000");
        console.log(socket)
    
        setName(name);
        setRoom(room);
        socket.emit('join', ({ name, room }), ({error}) => {
            if(error) {
                alert(error);
              }
        });
        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, ['localhost:5000', location.search]);
    
    useEffect(() => {
        socket.on('message', (message) => {
            setMessage([...messages, message]);
       }) 
    },[messages]);

    const sendMessages = (event) => {
        event.preventDefault();
        if (message)
        {
            socket.emit('sendMessage', message, () => setMessage(''));   
        }
    }
    console.log(message, messages);
    return (
        <div className="outerContainer">
            <div className="container">
                <input value={message}
                    onClick={(event) => setMessage(event.target.value)}
                    onKeyPress={(event)=> event.key==="Enter"? setMessage(event): null}/>
            </div>
        </div>
    )

};

export default Chat;