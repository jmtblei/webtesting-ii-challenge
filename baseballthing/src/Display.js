import React, { Component } from 'react';
import Dashboard from './Dashboard';

class Display extends Component {
  state = {
    strikes: 0,
    balls: 0,
    message: ''
  };

  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0,
      message: 'Base hit!'
    });
  };

  strike = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1,
        message: 'Swing and miss!'
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0,
        message: 'Struck out!'
      });
    }
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({
        ...this.state,
        strikes: this.state.strikes + 1,
        message: 'Foul ball!'
      });
    } else {
      this.setState({
        ...this.state
      });
    }
  };

  ball = () => {
    if (this.state.balls < 3) {
      this.setState({
        ...this.state,
        balls: this.state.balls + 1,
        message: 'Ball!'
      });
    } else {
      this.setState({
        balls: 0,
        strikes: 0,
        message: 'Walk!'
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Count</h2>
        <div>
          <h2>Strikes: {this.state.strikes}</h2>
          <h2>Balls: {this.state.balls}</h2>
          <h4>{this.state.message}</h4>
        </div>
        <Dashboard
          hit={this.hit}
          strike={this.strike}
          foul={this.foul}
          ball={this.ball}
        />
      </div>
    );
  }
}

export default Display;