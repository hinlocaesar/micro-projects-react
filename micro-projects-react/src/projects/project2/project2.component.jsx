import React, { Component } from "react";

//Main Class component
class Project2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  IncrementValue = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  DecrementValue = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  DisplayValue = (value) => <p>{value}</p>;

  render() {
    return (
      <>
        <h3>
          PROJECT 2 - Increment and Decrement Value, setState and Class
          Component
        </h3>
        <h3>{this.DisplayValue(this.state.counter)}</h3>
        <button onClick={this.IncrementValue}>Click to increment by 1</button>
        <button onClick={this.DecrementValue}>Click to decrement by 1</button>
        <h3>-------------------------------------------------------------</h3>
      </>
    );
  }
}

export default Project2;
