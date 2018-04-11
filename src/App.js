import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import GameRules from "./components/GameRules";
import './App.css';

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    friends: friends 
  };

  randomRender = id => {
    this.state.friends.forEach((image) => {
      if (image.id ===id) {
        if (image.clicked) {
          alert('Game Over! Card already selected.')
          this.setState({})
          this.resetGame();
          return false;
        } else {
          this.updatedScore();
          image.clicked = true;
        }
        if (this.state.score >= this.state.highScore) {
          this.newHighScore();
        }
      }
    });
  }

  randomImage = (array) => {
    let copy = [], n = array.length, i;
    while (n) {
      i = Math.floor(Math.random() * array.length);
      if (i in array) {
        copy.push(array[i]);
        delete array[i];
        n--;
      }
    }
    this.setState({ copy });
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.winning())
  }



  render() {
  return (
    <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
           <GameRules />
        {this.state.friends.map(friend => { 
            return <FriendCard
              {...friend}
              key={friend.id}
              randomRender={this.randomRender}
            />;
        })}
      </Wrapper>
  )};

}

export default App;
