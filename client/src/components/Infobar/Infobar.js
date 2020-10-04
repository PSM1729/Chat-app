import React from 'react';
import './Infobar.css';

const Infobar = ({room}) => (
    <div className="infobar">
        <div className="leftInnerContainer">
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/">
                CLOSE
            </a>
        </div>
    </div>
)

export default Infobar;