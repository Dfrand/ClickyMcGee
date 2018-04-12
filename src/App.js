import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
// import GameRules from "./components/GameRules";
import './App.css';


// I want a Modal to pop up with the Rules
alert('GAME RULES: Click on an image without clicking on the same image twice! Go for t' +
    'he High Score!')
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
          this.updateScore();
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
    this.setState({ friends: copy });
  }

  updateScore = () => {
    this.setState((newState) => ({
      score: newState.score + 1
    }), () => this.winning())
  }

  newHighScore = () => {
    this.setState((newState) => ({
      highScore: newState.score
    }))
  }

  winning = () => {
    if (this.state.score === this.state.friends.length) {
      alert('Winner!')
      this.setState({});
      this.resetGame();
  } else {
      setTimeout(() => {
        this.randomImage(this.state.friends)
      }, 500);
    }
  }

  resetGame = () => {
    this.state.friends.forEach((image) => {
      image.clicked = false;
    })
    this.setState({ score: 0 })
  }


  render() {
  return (
    <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
           {/* <GameRules /> */}
        {this.state.friends.map(friend => { 
            return <FriendCard
              {...friend}
              key={friend.id}
              randomRender={this.randomRender}
              randomImage={() => this.randomOrganize(this.state.friends)}
            />;
        })}
      </Wrapper>
  )};

}

export default App;
