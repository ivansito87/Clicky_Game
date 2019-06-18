import React from "react";
import "./style.css";
import Tilt from "react-tilt";

const FriendCard = props => (
  <Tilt
    className="Tilt"
    data-tilt-glare="true"
    options={{
      max: 35,
      reverse: true,
      perspective: 200,
      scale: 1.2,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      glare: true,
      maxGlare: 0.7
    }}
    style={{ height: 250, width: 250 }}
  >
    <div className="Tilt-inner">
      <div className="card" onClick={e => props.clickEvent(e.target.src)}>
        <img className="card-img-top card-height" src={props.name} alt="" />
      </div>
    </div>
  </Tilt>
);

export default FriendCard;
