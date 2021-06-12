// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {
      secondsLeftToDetonate: props.initialCount
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.secondsLeftToDetonate === 0 ?  "Boom!" : `${this.state.secondsLeftToDetonate} seconds left before I go boom!`}</h1>
      </div>
    )
  }
}

export default Bomb
