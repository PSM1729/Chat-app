import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './chat.css';
import Infobar from '../Infobar/Infobar';
import Input from '../Input/Input';

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
        socket.emit('join', { name, room }, () => {
            
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

    const sendMessage = (event) => {
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
                <Infobar room={room} />
                <Input message={message} sendMessage={sendMessage} setMessage={setMessage}/>
            </div>
        </div>
    )

};

export default Chat;