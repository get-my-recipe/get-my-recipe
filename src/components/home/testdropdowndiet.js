import React from "react";
import "./testboutoncss.css";

class TestDropdownDiet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  render() {
    console.log(this.state);
    const { diet } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h5>Choose your favorite diet : </h5>
        <select value={diet} onChange={this.handleChange}>
          <br />
          <option value="balanced">Balanced</option>
          <option value="high-protein">High-protein</option>
          <option value="low-fat">Low-fat</option>
          <option value="low-carbs">Low-carbs</option>
        </select>
      </form>
      
    );
  }
}

export default TestDropdownDiet;
