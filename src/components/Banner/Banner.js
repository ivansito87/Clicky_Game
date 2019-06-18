import React from 'react';
import './Banner.css';
// import FriendCard from "../FriendCard";

const Banner = () => (
    <div className="banner text-center d-flex align-items-center justify-content-center">
        <h1 className="mt-5 mb-0 display-3">Click on an image to earn points, but don't click on any more than once!</h1>
    </div>
);
export default Banner;
/*
import React from 'react';
import './style.css';

const Navbar = props => (
    <div className="navbar ">
        <div>Clicky Game</div>
        <div className={props.navMsgColor}>{props.navMessage}</div>
        <div>
            Score: {props.score} <span className="pipe">|</span> High Score: {props.highScore}
        </div>
    </div>
);

export default Navbar;
*/
