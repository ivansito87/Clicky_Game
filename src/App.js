import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index.js";
import Title from "./components/Title";
import friends from "./friends.json";
import Banner from "./components/Banner/Banner.js";
import Footer from './components/Footer/Footer'

const arrayOfUrl = [];

friends.forEach(function(element) {
    arrayOfUrl.push(element.image);
});

arrayOfUrl.slice();

console.log(arrayOfUrl);



class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    score: 0,
    highScore: 0,

    // stores the class value to assign to navMessage based on a good or bad click
    navMsgColor: "",

    // contains intro, success, and failure message
    navMessage: "Click an image to begin!",

    // contains an array of image urls
    allCharacters: this.shuffleArray(),

    // will track  each clicked element.
    wasClicked: [],

    // shakes the container on an incorrect guess if set to true
    shake: false
  };

  clickEvent = this.checkClicked.bind(this);
  //defining function
  shuffleArray() {
    // creates a copy of the current characters array to modify it by value, and not by reference
    const newArr = arrayOfUrl.slice();

    // will store the shuffled array
    const shuffleArr = [];

    // each loop through an index gets spliced from newArr, reducing its length
    // gets a random index based off the current length of newArr
    // splices the value from newArr, and pushes it to shuffleArr
    while (newArr.length > 0) {
      shuffleArr.push(
        newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]
      );
    }

    return shuffleArr;
  }

  checkClicked(clickedElem) {
    // creates a copy of the wasClicked array to modify it by value, and not by reference. wasClicked stores all previous clicked images
    const prevState = this.state.wasClicked.slice();

    // shuffles the images
    const shuffled = this.shuffleArray();

    // tracks score
    let score = this.state.score;
    let highScore = this.state.highScore;

    // if the clicked item is not in wasClicked, then it hasn't been clicked and the score is increased
    if (!this.state.wasClicked.includes(clickedElem)) {
      // if score and highScore are the same, then there is a new highScore value
      if (score === highScore) {
        score++;
        highScore++;

        // if they are not equal, then only increase the score value
      } else {
        score++;
      }

      // adds the clicked item to wasClicked to track that it has been clicked
      prevState.push(clickedElem);
    }

    // resets the current score if the same element was clicked twice
    if (this.state.wasClicked.includes(clickedElem)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgColor: "incorrect",
        navMessage: "Incorrect guess!",
        allCharacters: shuffled,
        wasClicked: [],
        shake: true
      });
    }

    // if this runs, then the same element has not been clicked twice and the score is increased
    this.setState({
      score: score,
      highScore: highScore,
      navMsgColor: "correct",
      navMessage: "You Guessed Correctly!",
      allCharacters: shuffled,
      wasClicked: prevState,
      shake: false
    });

    // removes the green correct indicator on a successful click after .5s to re-render the class on each success
    return setTimeout(() => this.setState({ navMsgColor: "" }), 500);
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const state = this.state;
    return (
      <div>
        <Title
          score={state.score}
          highScore={state.highScore}
          navMessage={state.navMessage}
          navMsgColor={state.navMsgColor}
        />
        <Banner />
        <Wrapper
          shake={state.shake}
          characters={state.allCharacters}
          clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
