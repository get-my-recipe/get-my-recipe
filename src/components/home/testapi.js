
import React, { Component } from 'react';
import axios from 'axios';
import Nav from '../sharedcomponents/nav/nav';
import TestFormAPI from './testFormAPI';
import TestRecipe from './testRecipe';

class TestAPI extends Component {
  constructor(){
    super();

  this.state = {
    ingredient: '',
    recipes: [],
  }
  }

 // "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"



    getAPi = (event) => {
    event.preventDefault()
    const apiID='a3b47c77';
    const apiKey='742e6a73e3d13dd35b00ec2852aaf28d';
    const nb=10; //Max 100
    const ingredient=this.state.ingredient
    const example=`https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`
    // calories=591-722&health=alcohol-free`
    axios.get(example)
        .then(res => {
        const recipes = res.data.hits;
        this.setState({ recipes });
        console.log(this.state)
        })
    console.log('getAPI')
    }

    handleInputChange = (event) => {
      event.preventDefault();
      const target = event.target;
      const value = target.value;
      this.setState({
        ingredient:value
      })
    }
     
    
  render() {
    const { ingredient, recipes } = this.state;
    return (
      <div> 
        <Nav />
        <TestFormAPI
         value={ingredient} 
         handleInputChange={this.handleInputChange}
         updateAPI={this.getAPi}
        />
        {recipes.map(r => 
        <TestRecipe 
        key = {r.recipe.label}
        title={r.recipe.label}
        image={r.recipe.image}
        />)}
                  
        
      </div>
    
    )
  }

}


export default TestAPI;
