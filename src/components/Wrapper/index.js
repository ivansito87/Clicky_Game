import React from "react";
import "./style.css";
import FriendCard from "../FriendCard";

// main container for each FriendCard component
// loops through each index in props.characters, which contains an array of character images
// to create a new Character component for each image
// attaches the passed down clickEvent function to each Character component
const Wrapper = props => (
  // loops through
  <div
    className={
      props.shake
        ? "wrapper d-flex flex-wrap justify-content-center shake"
        : "wrapper d-flex flex-wrap justify-content-center"
    }
  >
    {props.characters.map((a, i) => (
      <FriendCard name={a} key={i} clickEvent={props.clickEvent} />
    ))}
  </div>
);

export default Wrapper;
