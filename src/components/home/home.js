import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCardFlip from 'react-card-flip';
import Header from './header/header';
import Example from './buttontestcarousel';
import Searchbar from './searchbar/searchbar';
import SingleCard from './singlecard/singlecard';
import SingleCardVerso from './singlecard/singlecardverso';
import ForbideItem from './filter/forbideItem';
import FilterDiet from './filter/filterdiet';
import FilterCalories from './filter/filtercalories';
import FilterHealth from './filter/filterhealth';
import Filteringredient from './filter/filteringredient';
import FilterTime from './filter/filtertime';

import './home.css';
import './filter/forbiden.css';




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
      excluded: [],
      ingr: 20 ,
      diet:'no filter',
      isVegan: false,
      isVegetarian: false,
      isPeanutFree: false,
      isNutFree: false,
      isSugarConscious: false,
      isAlcoolFree: false,
      caloriesMax:'',
      timeMax:'',

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
      event.preventDefault();
      const apiID = 'a3b47c77';
      const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
      const nb = 100;
      const { ingredient } = this.state;
      let api = `https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;

          //filter
            //food excluded
          const excluded = this.state.excluded
          if (excluded.length !== -1) {
             for (let i=0;i<excluded.length;i++){
               api=`${api}&excluded=${excluded[i].text}`
             }
          }
            //Maximum number of ingredients.
            const ingr = this.state.ingr
            api=`${api}&ingr=${ingr}`;
           

            //diet
            const diet = this.state.diet;
            if (diet !=='no filter') {
            api=`${api}&diet=${diet}`;
            }
            
            //health
            // Health labels: “vegan”, “vegetarian”, “peanut-free”, “tree-nut-free”, "sugar-conscious" , "alcohol-free" (labels are per serving)
            const isVegan = this.state.isVegan;
            const isVegetarian = this.state.isVegetarian;
            const isPeanutFree = this.state.isPeanutFree;
            const isNutFree = this.state.isNutFree;
            const isSugarConscious = this.state.isSugarConscious;
            const isAlcoolFree = this.state.isAlcoolFree;
            
            if (isVegan) {api=`${api}&health=vegan`}
            if (isVegetarian) {api=`${api}&health=vegetarian`}
            if (isPeanutFree) {api=`${api}&health=peanut-free`}
            if (isNutFree) {api=`${api}&health=tree-nut-free`}
            if (isSugarConscious) {api=`${api}&health=sugar-conscious`}
            if (isAlcoolFree) {api=`${api}&health=alcohol-free`}

            //calories max
            const caloriesMax = this.state.caloriesMax
            if (caloriesMax !== ""){
              api=`${api}&calories=${caloriesMax}`;
            }

              // time max in min
              const timeMax = this.state.timeMax
            if (timeMax !== ""){
              api=`${api}&time=${timeMax}`;
            }

            console.log(api)


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
          this.setState({ recipes, displayBook });
        });
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
 
    //filter ingr
    handleInputChangeIngr = (event) => {
      event.preventDefault();
      const { target } = event;
      const valueIngr = target.value;
      this.setState({
        ingr: valueIngr,
      });
    };
  
    incrementIngr = () => {
      const ingr = Number(this.state.ingr) + 1;
      this.setState({
        ingr,
      });
    };
  
    decrementIngr = () => {
      const ingr = Number(this.state.ingr) - 1;
      this.setState({
        ingr,
      });
    };
    //end

    //filter diet
    handleChangeDiet = (event) => {
      event.preventDefault();
      this.setState({ diet: event.target.value });
    };
    //end

    //filter health
    handleInputVega = (event) => {
      const target = event.target;
      const value = target.name === 'isVegan' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
  
    handleInputVege = (event) => {
      const target = event.target;
      const value =
        target.name === 'isVegetarian' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
  
    handleInputPeanut = (event) => {
      const target = event.target;
      const value =
        target.name === 'isPeanutFree' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
  
    handleInputNutFree = (event) => {
      const target = event.target;
      const value = target.name === 'isNutFree' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
  
    handleInputSugar = (event) => {
      const target = event.target;
      const value =
        target.name === 'isSugarConscious' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
  
    handleInputAlcool = (event) => {
      const target = event.target;
      const value =
        target.name === 'isAlcoolFree' ? target.checked : target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    };
    //end

    //filter calories
    handleOnChangeCalories = (event) => {
      event.preventDefault();
      this.setState({
        caloriesMax: event.target.value,
      });
    };
    //end

    //filter time
    handleOnChangeTime = (event) => {
      event.preventDefault();
      this.setState({
        timeMax: event.target.value,
      });
    };
    //
    
    //filter excluded
    addItem = (e) => {
      if (this._inputElement.value !== "") {
          let newItem = {
              text: this._inputElement.value,
              key: uuidv4()
          }
         
          this.setState((prevState) => {
              return {
                  excluded: prevState.excluded.concat(newItem)
              }
          }
          );
      }
      this._inputElement.value ="";
      console.log(this.state.excluded)
      e.preventDefault()
  }
  deleteItem = (key) => {
      const filterexcluded = this.state.excluded.filter(item => {
         return (item.key !== key)
      }
          )
  
          this.setState ({excluded : filterexcluded })
  }
  
    //end

 

    render() {
      console.log(this.state);
      const {
        ingredient, recipes, username, displayBook, ingr, diet, isVegan, isVegetarian, isPeanutFree,isNutFree,
        isSugarConscious, isAlcoolFree, caloriesMax, timeMax
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
            valueIngr={ingr}
            handleInputChangeIngr={this.handleInputChangeIngr}
            decrementIngr={this.decrementIngr}
            incrementIngr={this.incrementIngr}
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
            caloriesMax={caloriesMax}
            handleOnChangeCalories={this.handleOnChangeCalories}
            timeMax={timeMax}
            handleOnChangeTime={this.handleOnChangeTime}
          />

          {/* Start Filter */}
              <div className='forbideItem'>
                <form onSubmit={this.addItem}>
                    <input
                    ref={(a) => this._inputElement = a }
                    placeholder="Enter ingredient you don't want" >
                    </input>
                    <button type='submit'>add item</button>
                </form>
          
                <ForbideItem 
                entries={this.state.excluded}
                delete={this.deleteItem}
                />
            </div>
            <Filteringredient
                       valueIngr={ingr}
                       handleInputChangeIngr={this.handleInputChangeIngr}
                       decrementIngr={this.decrementIngr}
                       incrementIngr={this.incrementIngr}
                      /> 

                      <FilterDiet
                         diet={diet}
                         handleChangeDiet={this.handleChangeDiet}
                      />
                      <FilterHealth
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
                       />
                       <FilterCalories
                       caloriesMax={caloriesMax}
                       handleOnChangeCalories={this.handleOnChangeCalories}
                       />
                       <FilterTime
                       timeMax={timeMax}
                       handleOnChangeTime={this.handleOnChangeTime}
                       />


        {/* end filter */}
       
          <Example />
          <Container className="card-template">
            <Row>
              {recipes.map((r) => (
                <Col sm={6} lg={4}>
                  <ReactCardFlip isFlipped={r.isFlipped} flipDirection="vertical">
                    <SingleCard
                      key={r.uri}
                      title={r.label}
                      image={r.image}
                      flip={this.handleFlip}
                      uri={r.uri}
                      display={displayBook}
                      bookmarkF={this.handleStarChange}
                      bookmarked={r.bookmarked}
                      url={r.url}
                    />
                    <SingleCardVerso
                      key={r.uri}
                      title={r.label}
                      flip={this.handleFlip}
                      uri={r.uri}
                      ask={r.ask}
                      ingredientLines={r.ingredientLines}
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
