import React from 'react';
import './Message.css';


const Message = ({ message:{ user , text }, name }) => { 
    let cu = false;
    const tname = name.trim().toLowerCase();

    if (user === tname) {
        cu = true;
    }
    return (
        cu
            ?
            (
                <div className="messageContainer justifyEnd">
                    <p className="sendText pr-10">{tname}</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{text}</p>
                    </div>
                </div>
            )
            :
            (
                <div className="messageContainer justifyEnd">
                    <p className="sendText">{tname}</p>
                    <div className="messageBox">
                        <p className="messageText">{text}</p>
                    </div>
                    <p className="sentText pl-10 ">{user}</p>
                </div>
            )
    )
};

export default Message;