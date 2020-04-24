import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './header/header';
import RecipeCarousel from '../carousel/carousel';
import Searchbar from './searchbar/searchbar';
import SingleCard from './singlecard/singlecard';
import './home.css';



class Home extends Component {
  constructor(){
    super();

  this.state = {
    ingredient: '',
    recipes: [],
    count:0,
  }
  }
    getAPi = (event) => {
    event.preventDefault()
    const apiID='a3b47c77';
    const apiKey='742e6a73e3d13dd35b00ec2852aaf28d';
    const nb=100;
    
    const ingredient=this.state.ingredient
    let example=`https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`

    
    axios.get(example)
        .then(res => {
        const recipes = res.data.hits;
        const count = res.data.count;
        console.log(res.data)
        this.setState({ recipes, count });
        })
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
    const { ingredient, recipes, count } = this.state;
    return (
      <div> 
        <Header />
        <Searchbar
         value={ingredient} 
         handleInputChange={this.handleInputChange}
         updateAPI={this.getAPi}
        />
        <RecipeCarousel />

        <Container className="card-template">
          <Row>
              {recipes.map(r => 
              <SingleCard
              key = {r.recipe.uri}
              title={r.recipe.label}
              image={r.recipe.image}
              />)}
          </Row>
        </Container>

      </div>
    
    )
  }

}


export default Home;

