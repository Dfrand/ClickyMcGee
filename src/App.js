import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
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

  render() {
  return (
    
        {this.state.friends.map(friend => { 
            return <FriendCard
              {...friend}
              key={friend.id}
              randomRender={this.randomRender}
            />;
        })}
    
  )};

}

export default App;
