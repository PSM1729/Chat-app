import React from 'react';
import './Infobar.css';

const Infobar = ({room}) => (
    <div className="infobar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" alt="Online Room" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/">
                <img alt="Close Image"/>
            </a>
        </div>
    </div>
)

export default Infobar;