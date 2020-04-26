import React from "react";

class TestCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVegan: false,
      isVegetarian: false,
      isPeanutFree: false,
      isNutFree: false,
      isSugarConscious: false,
      isAlcoolFree: false,

    };
  }

  handleInputVega = (event) => {
    const target = event.target;
    const value = target.name === "isVegan" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleInputVege = (event) => {
    const target = event.target;
    const value =
      target.name === "isVegetarian" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleInputPeanut = (event) => {
    const target = event.target;
    const value =
      target.name === "isPeanutFree" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleInputNutFree = (event) => {
    const target = event.target;
    const value = target.name === "isNutFree" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };

  handleInputSugar = (event) => {
    const target = event.target;
    const value =
      target.name === "isSugarConscious" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
   
  };

  handleInputAlcool = (event) => {
    const target = event.target;
    const value =
      target.name === "isAlcoolFree" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    
  };

  render() {
    console.log(this.state);
    const { vega, vege, peanut, treenutfree, sugar, alcool } = this.state;
    return (
      <form>
        <h3>Choose a special diet option: </h3>
        <label htmlFor="veganDiet">
          Vegan
          <input
            id="veganDiet"
            name="isVegan"
            type="checkbox"
            checked={vega}
            onChange={this.handleInputVega}
          />
        </label>

        <label htmlFor="vegeDiet">
          Vegeterian
          <input
            id="vegeDiet"
            name="isVegetarian"
            type="checkbox"
            checked={vege}
            onChange={this.handleInputVege}
          />
        </label>
        <label htmlFor="peanutfreeDiet">
          Peanut free
          <input
            id="peanutfreeDiet"
            name="isPeanutFree"
            type="checkbox"
            checked={peanut}
            onChange={this.handleInputPeanut}
          />
        </label>
        <label htmlFor="nutfreeDiet">
          Tree nut free
          <input
            id="nutfreeDiet"
            name="isNutFree"
            type="checkbox"
            checked={treenutfree}
            onChange={this.handleInputNutFree}
          />
        </label>

        <label htmlFor="sugar-conscious">
          Sugar conscious
          <input
            id="sugar-conscious"
            name="isSugarConscious"
            type="checkbox"
            checked={sugar}
            onChange={this.handleInputSugar}
          />
        </label>

        <label htmlFor="alcool-free">
          Alcool free
          <input
            id="alcool-free"
            name="isAlcoolFree"
            type="checkbox"
            checked={alcool}
            onChange={this.handleInputAlcool}
          />
        </label>
      </form>
    );
  }
}

export default TestCheckbox;
