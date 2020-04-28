import React from "react";
import "./testboutoncss.css";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 750,
    };
  }

  handleOnChange = (event) => {
    event.preventDefault();
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <br />
        <h5>Choose the number of calories you want :</h5>
     
        <div  style={{ textAlign: 'center' }}> {this.state.value} </div>
        <input
        style={{ width: '100%' }}
          type="range"
          value={this.state.value}
          min={0}
          max={1500}
          onChange={this.handleOnChange}
        />
      </div>
    );
  }
}

export default Slider;
