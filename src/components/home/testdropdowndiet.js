import React from "react";

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
        <label htmlFor="dietChoice">
          Choose your favorite diet :
          <select value={diet} onChange={this.handleChange}>
            <option value="balanced">Balanced</option>
            <option value="high-protein">High-protein</option>
            <option value="low-fat">Low-fat</option>
            <option value="low-carbs">Low-carbs</option>
          </select>
        </label>
      </form>
    );
  }
}

export default TestDropdownDiet;
