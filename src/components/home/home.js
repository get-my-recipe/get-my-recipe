/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */

import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCardFlip from 'react-card-flip';
import Header from './header/header';
import Searchbar from './searchbar/searchbar';
import SingleCard from './singlecard/singlecard';
import SingleCardVerso from './singlecard/singlecardverso';
import './home.css';

const apiID = 'a3b47c77';
const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
const nb = 100;
class Home extends Component {
  constructor() {
    super();
    this.state = {
      ingredient: '',
      recipes: [],
      username: '',
      displayBook: true,
      postBook:
      {
        title: '',
        poster: '',
        comment: '',
      },

      ingr: 20,
      diet: 'no filter',
      isVegan: false,
      isVegetarian: false,
      isPeanutFree: false,
      isNutFree: false,
      isSugarConscious: false,
      isAlcoolFree: false,
      caloriesMax: 3000,
      timeMax: 200,
      isShowing: true,
      show: false,

    };
  }

  // mark a recipe api post
  componentDidUpdate(_prevProps, prevState) {
    const { postBook } = this.state;
    if (prevState.postBook !== postBook) {
      const url = 'https://post-a-form.herokuapp.com/api/movies/';
      axios.post(url, postBook)
        .then((res) => res.data)
        .then((res) => {
          alert(`BookmarK added ID: ${res.id} !`);
        })
        .catch((e) => {
          console.error(e);
          alert(`Error Bookmark no added : ${e.message}`);
        });
    }
  }


    // flip the card
    handleFlip = (uri) => {
      const { recipes } = this.state;
      const select = recipes.findIndex((el) => el.uri === uri);
      if (recipes[select].isFlipped === true) {
        recipes[select].isFlipped = false;
      } else {
        recipes[select].isFlipped = true;
      }
      this.setState({ recipes });
    }

    // display recipes
    getAPi = (event) => {
      this.handleShowStatus();
      event.preventDefault();
      const { ingredient } = this.state;
      let api = `https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;

      // filter

      // Maximum number of ingredients.
      const { ingr } = this.state;
      api = `${api}&ingr=${ingr}`;


      // time max in min
      const { timeMax } = this.state;
      api = `${api}&time=1-${timeMax}`;

      // diet
      const { diet } = this.state;
      if (diet !== 'no filter') {
        api = `${api}&diet=${diet}`;
      }

      // health
      const { isVegan } = this.state;
      const { isVegetarian } = this.state;
      const { isPeanutFree } = this.state;
      const { isNutFree } = this.state;
      const { isSugarConscious } = this.state;
      const { isAlcoolFree } = this.state;

      if (isVegan) { api = `${api}&health=vegan`; }
      if (isVegetarian) { api = `${api}&health=vegetarian`; }
      if (isPeanutFree) { api = `${api}&health=peanut-free`; }
      if (isNutFree) { api = `${api}&health=tree-nut-free`; }
      if (isSugarConscious) { api = `${api}&health=sugar-conscious`; }
      if (isAlcoolFree) { api = `${api}&health=alcohol-free`; }

      // calories max
      const { caloriesMax } = this.state;
      api = `${api}&calories=${caloriesMax}`;


      axios.get(api)
        .then((res) => {
          // function ingredients in the search bar
          const incl = (el, ingred) => {
            const ingredientArray = ingred.split(' ');
            let result = false;
            if (ingredientArray.length > 0) {
              let val = false;
              for (let i = 0; i < ingredientArray.length; i += 1) {
                val = el.toLowerCase().includes(ingredientArray[i].toLowerCase());
                if (val === true) { result = true; }
              }
            }
            return result;
          };
          const addask = res.data.hits.map((el) => el.recipe).map((el) => el.ingredientLines.map((el) => ({ ingr: el, ask: incl(el, ingredient) })));
          const recipes = res.data.hits.map((el) => el.recipe).map((el, ind) => ({
            ...el, isFlipped: false, bookmarked: false, ask: addask[ind],
          }));
          const displayBook = true;
          this.setState({ recipes, displayBook, isShowing: true });
        });
      this.reset();
    }


    // change search ingredient
    handleInputChange = (event) => {
      event.preventDefault();
      const { target } = event;
      const { value } = target;
      this.setState({
        ingredient: value,
      });
    }

    // change username
    handleInputChangeUsername = (event) => {
      event.preventDefault();
      const { target } = event;
      const { value } = target;
      this.setState({
        username: value,
      });
    }

    // display book
    getBook = (event) => {
      event.preventDefault();
      if (this.state.username === '') {
        alert('Please, enter your username');
      } else {
        axios
          .get('https://post-a-form.herokuapp.com/api/movies/')
          .then((res) => {
            const booksUsername = res.data.filter((book) => book.poster === this.state.username).map((el) => el.title).filter((el) => el.includes('recipe') && el.indexOf('recipe') === 0);
            const uniqueSet = new Set(booksUsername);
            const books = [...uniqueSet];
            if (books.length > 0) {
              let r = '';
              for (let i = 0; i < books.length; i += 1) {
                r += `r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${books[i]}&`;
              }
              const url = `https://api.edamam.com/search?${r}app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;
              axios.get(url)
                .then((res) => {
                  const recipes = res.data;
                  const displayBook = false;
                  this.setState({ recipes, displayBook });
                });
            } else {
              alert('nothing in your bookmark');
            }
          });
      }
    }

    // mark a recipe change state.postBook
    handleStarChange = (uri) => {
      if (this.state.username === '') {
        alert('Please, enter your username');
      } else {
        const searchTerm = '#';
        const postBook = {
          title: uri.substring(uri.indexOf(searchTerm) + 1, uri.length),
          poster: this.state.username,
          comment: 'TRUE',
        };
        const { recipes } = this.state;
        const select = this.state.recipes.findIndex((el) => el.uri === uri);
        recipes[select].bookmarked = true;
        this.setState({
          title: '',
          poster: '',
          comment: '',
          postBook,
          recipes,
        });
      }
    }


    // filter ingr
    handleInputChangeIngr = (value) => {
      this.setState({
        ingr: value,
      });
    };
    // end

    // filter diet
    handleChangeDiet = (event) => {
      event.preventDefault();
      this.setState({ diet: event.target.value });
    };
    // end

    // filter health
    handleInputVega = (event) => {
      const { target } = event;
      const value = target.name === 'isVegan' ? target.checked : target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };

    handleInputVege = (event) => {
      const { target } = event;
      const value = target.name === 'isVegetarian' ? target.checked : target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };

    handleInputPeanut = (event) => {
      const { target } = event;
      const value = target.name === 'isPeanutFree' ? target.checked : target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };

    handleInputNutFree = (event) => {
      const { target } = event;
      const value = target.name === 'isNutFree' ? target.checked : target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };

    handleInputSugar = (event) => {
      const { target } = event;
      const value = target.name === 'isSugarConscious' ? target.checked : target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };

    handleInputAlcool = (event) => {
      const { target } = event;
      const value = target.name === 'isAlcoolFree' ? target.checked : target.value;
      const { name } = target;
      this.setState({
        [name]: value,
      });
    };
    // end

    // filter calories
    handleOnChangeCalories = (value) => {
      this.setState({
        caloriesMax: value,
      });
    };
    // end

    // filter time
    handleOnChangeTime = (value) => {
      this.setState({
        timeMax: value,
      });
    };
    // end

    // loading
    handleShowStatus = () => {
      const { isShowing } = this.state;
      this.setState({ isShowing: !isShowing });
    }

    // modal filter
  handleShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
    const diet = 'no filter';
    const isVegan = false;
    const isVegetarian = false;
    const isPeanutFree = false;
    const isNutFree = false;
    const isSugarConscious = false;
    const isAlcoolFree = false;
    this.setState({
      diet, isVegan, isVegetarian, isPeanutFree, isNutFree, isSugarConscious, isAlcoolFree,
    });
  }

  handleShowClose = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }


  reset() {
    const ingredient = '';
    this.setState({ ingredient });
  }
  // end


  render() {
    console.log(this.state);
    const {
      ingredient, recipes, username, displayBook, diet, isVegan, isVegetarian, isPeanutFree,
      isNutFree, isSugarConscious, isAlcoolFree, isShowing, show, ingr, caloriesMax, timeMax,
    } = this.state;


    return (
      <div>
        <Header
          value={username}
          handleInputChange={this.handleInputChangeUsername}
          book={this.getBook}
        />
        <Searchbar
          value={ingredient}
          handleInputChange={this.handleInputChange}
          updateAPI={this.getAPi}
          handleInputChangeIngr={this.handleInputChangeIngr}
          diet={diet}
          handleChangeDiet={this.handleChangeDiet}
          vega={isVegan}
          vege={isVegetarian}
          peanut={isPeanutFree}
          treenutfree={isNutFree}
          sugar={isSugarConscious}
          alcool={isAlcoolFree}
          handleInputVega={this.handleInputVega}
          handleInputVege={this.handleInputVege}
          handleInputPeanut={this.handleInputPeanut}
          handleInputSugar={this.handleInputSugar}
          handleInputAlcool={this.handleInputAlcool}
          handleInputNutFree={this.handleInputNutFree}
          handleOnChangeCalories={this.handleOnChangeCalories}
          handleOnChangeTime={this.handleOnChangeTime}
          isShowing={isShowing}
          handleShow={this.handleShow}
          handleClose={this.handleShowClose}
          show={show}
          ingrText={ingr}
          dietText={diet}
          veganText={isVegan}
          vegeText={isVegetarian}
          peanutText={isPeanutFree}
          treenutfreeText={isNutFree}
          sugarText={isSugarConscious}
          alcoolText={isAlcoolFree}
          calText={caloriesMax}
          timeText={timeMax}
        />

        <Container className="card-template">
          <Row>
            {recipes.map((r) => (
              <Col key={r.uri} sm={6} lg={4}>
                <ReactCardFlip isFlipped={r.isFlipped} flipDirection="vertical">
                  <SingleCard

                    recipes={{ ...r }}
                    flip={this.handleFlip}
                    display={displayBook}
                    bookmarkF={this.handleStarChange}
                  />
                  <SingleCardVerso

                    title={r.label}
                    flip={this.handleFlip}
                    uri={r.uri}
                    ask={r.ask}
                    ingredientLines={r.ingredientLines}
                    url={r.url}
                  />
                </ReactCardFlip>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Home;
