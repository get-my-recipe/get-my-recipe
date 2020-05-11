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

      ingr: '',
      diet: 'no filter',
      isVegan: false,
      isVegetarian: false,
      isPeanutFree: false,
      isNutFree: false,
      isSugarConscious: false,
      isAlcoolFree: false,
<<<<<<< HEAD
      caloriesMax:'',
      timeMax:'',
      isShowing: true,
      show: false,
=======
      caloriesMax: '',
      timeMax: '',
>>>>>>> d8c557d0ccfe7c3190a1c45ba8bd63a04ef35f28

    };
  }

    // flip the card
    handleFlip = (uri) => {
      const { recipes } = this.state;
      const select = this.state.recipes.findIndex((el) => el.uri === uri);
      if (recipes[select].isFlipped === true) {
        recipes[select].isFlipped = false;
      } else {
        recipes[select].isFlipped = true;
      }
      this.setState({ recipes });
    }

    // display recipes
    getAPi = (event) => {
      this.handleShowStatus()
      event.preventDefault();
<<<<<<< HEAD
=======
      // const apiID = 'a3b47c77';
      // const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
      // const nb = 100;
>>>>>>> d8c557d0ccfe7c3190a1c45ba8bd63a04ef35f28
      const { ingredient } = this.state;
      let api = `https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;

      // filter

      // Maximum number of ingredients.
      const { ingr } = this.state;
      if (ingr !== '') {
        api = `${api}&ingr=${ingr}`;
      }

<<<<<<< HEAD
              // time max in min
              const timeMax = this.state.timeMax
            if (timeMax !== ""){
              api=`${api}&time=1-${timeMax}`;
            }
            else {
              api=`${api}&time=1%2B`;
            }
=======
      // diet
      const { diet } = this.state;
      if (diet !== 'no filter') {
        api = `${api}&diet=${diet}`;
      }
>>>>>>> d8c557d0ccfe7c3190a1c45ba8bd63a04ef35f28

      // health
      // Health labels: “vegan”, “vegetarian”, “peanut-free”, “tree-nut-free”, "sugar-conscious" , "alcohol-free" (labels are per serving)
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
      if (caloriesMax !== '') {
        api = `${api}&calories=${caloriesMax}`;
      }

      // time max in min
      const { timeMax } = this.state;
      if (timeMax !== '') {
        api = `${api}&time=${timeMax}`;
      }

      console.log(api);


      axios.get(api)
        .then((res) => {
          // function ingredients in the search bar
          const incl = (el, ingred) => {
            const ingredientArray = ingred.split(' ');
            let result = false;
            if (ingredientArray.length > 0) {
              let val = false;
              for (let i = 0; i < ingredientArray.length; i++) {
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
          this.setState({ recipes, displayBook ,isShowing: true});
        });
<<<<<<< HEAD
        this.reset()
        
=======
      this.reset();
>>>>>>> d8c557d0ccfe7c3190a1c45ba8bd63a04ef35f28
    }

    reset() {
      const ingredient = '';
      this.setState({ ingredient });
      const ingr = '';
      this.setState({ ingr });
      const diet = 'no filter';
      this.setState({ diet });
      const isVegan = false;
      this.setState({ isVegan });
      const isVegetarian = false;
      this.setState({ isVegetarian });
      const isPeanutFree = false;
      this.setState({ isPeanutFree });
      const isNutFree = false;
      this.setState({ isNutFree });
      const isSugarConscious = false;
      this.setState({ isSugarConscious });
      const isAlcoolFree = false;
      this.setState({ isAlcoolFree });
      const caloriesMax = '';
      this.setState({ caloriesMax });
      const timeMax = '';
      this.setState({ timeMax });
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
              for (let i = 0; i < books.length; i++) {
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

    // mark a recipe api post
    componentDidUpdate(prevProps, prevState) {
      if (prevState.postBook !== this.state.postBook) {
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state.postBook)
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
    //end

    //loading
    handleShowStatus = () => {
      const { isShowing } = this.state;
      this.setState({ isShowing: !isShowing });
    }

    //modal filter
  handleShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  
  //end
    
   
    render() {
      console.log(this.state);
      const {
        ingredient, recipes, username, displayBook,  diet, isVegan, isVegetarian, isPeanutFree,isNutFree,
        isSugarConscious, isAlcoolFree, isShowing, show
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
            handleClose={this.handleShow}
            show={show}
          />

          <Container className="card-template">
            <Row>
              {recipes.map((r) => (
                <Col sm={6} lg={4}>
                  <ReactCardFlip isFlipped={r.isFlipped} flipDirection="vertical">
                    <SingleCard
                      key={r.uri}
                      recipes={{...r}}
                      flip={this.handleFlip}
                      display={displayBook}
                      bookmarkF={this.handleStarChange}
                    />
                    <SingleCardVerso
                      key={r.uri}
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
