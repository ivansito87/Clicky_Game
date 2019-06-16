import React from "react";
import "./style.css";
import Tilt from "react-tilt";

function FriendCard(props) {
    return (
        <Tilt
            className="Tilt"
            options={{max: 35,
                    revers: true,
            scale: 1,
            glare: true}}
            style={{height: 250, width: 250}}
        >
            <div className="Tilt-inner">
                <div className="card" onClick={e => props.clickEvent(e.target.src)}>
                    <img className="card-img-top card-height" src={props.image} alt={props.name} />
                </div>
            </div>
        </Tilt>
    );
}

export default FriendCard;
