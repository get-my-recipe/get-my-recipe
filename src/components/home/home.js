import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './header/header';
import ButtonCarousel from './buttoncarousel/buttoncarousel';
import Searchbar from './searchbar/searchbar';
import SingleCard from './singlecard/singlecard';
import './home.css';


class Home extends Component {
  constructor() {
    super();

    this.state = {
      ingredient: '',
      recipes: [],

    };
  }

    getAPi = (event) => {
      event.preventDefault();
      const apiID = 'a3b47c77';
      const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
      const nb = 100;

      const { ingredient } = this.state;
      const api = `https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;


      axios.get(api)
        .then((res) => {
          const recipes = res.data.hits;
          console.log(res.data);
          this.setState({ recipes });
        });
    }

    handleInputChange = (event) => {
      event.preventDefault();
      const { target } = event;
      const { value } = target;
      this.setState({
        ingredient: value,
      });
    }

    render() {
      const { ingredient, recipes } = this.state;
      return (
        <div>
          <Header />
          <Searchbar
            value={ingredient}
            handleInputChange={this.handleInputChange}
            updateAPI={this.getAPi}
          />
          <ButtonCarousel />

          <Container className="card-template">
            <Row>
              {recipes.map((r) => (
                <SingleCard
                  key={r.recipe.uri}
                  title={r.recipe.label}
                  image={r.recipe.image}
                />
              ))}
            </Row>
          </Container>

        </div>

      );
    }
}


export default Home;
