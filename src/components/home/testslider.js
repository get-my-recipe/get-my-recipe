import React from "react";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };

  render() {
      console.log(this.state)
    return (
      <div>
        <input
          type="range"
          value={this.state.value}
          min={0}
          max={1500}
          onChange={this.handleOnChange}
        />
        <div> {this.state.value} </div>
      </div>
    );
  }
}

export default Slider;
