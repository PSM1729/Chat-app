import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './join.css';

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">WELCOME</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event => setName(event.target.value))} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event => setRoom(event.target.value))} /></div>
                <Link onClick={event => (!name || !room) ? event.defaultPrevented() : null} to={`/chat?name=${name}&room=${room}`}>
                    <br></br>
                    <button className="button mt-15" type="submit">
                        Sign In
                    </button>
                </Link>

            </div>

        </div>
    )
};

export default Join;