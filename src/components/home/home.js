import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header/header';
import ButtonCarousel from './buttoncarousel/buttoncarousel';
import Searchbar from './searchbar/searchbar';
import SingleCard from './singlecard/singlecard';
import SingleCardVerso from './singlecard/singlecardverso';
import ReactCardFlip from 'react-card-flip';
import './home.css';

const apiID='a3b47c77';
const apiKey='742e6a73e3d13dd35b00ec2852aaf28d';
const nb=100;

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
      }
    }
  }
   
    //flip the card
    handleFlip = (uri) => {
      let recipes=this.state.recipes
      const select = this.state.recipes.findIndex(el =>el.uri===uri)
       if (recipes[select].isFlipped===true) {
        recipes[select].isFlipped=false
       } 
       else {
        recipes[select].isFlipped=true
       }
       this.setState({ recipes });
  }

    //display recipes
    getAPi = (event) => {
      event.preventDefault();
      const apiID = 'a3b47c77';
      const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
      const nb = 100;

      const { ingredient } = this.state;
      const api = `https://api.edamam.com/search?q=${ingredient}&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;


    axios.get(api)
        .then(res => {
        // let recipes = res.data.hits.map(el => el.recipe).map(el=> ({...el, isFlipped:false, bookmarked:false}));
          
       
       //function ingredients in the search bar
        const incl=(el,ingred)=> {
          const ingredientArray= ingred.split(' ')
            let result=false
          if (ingredientArray.length>0) {   
            let val=false   
            for (let i=0; i<ingredientArray.length;i++){
                 val= el.includes(ingredientArray[i])
                  if (val===true) {result=true}
                }
               
        }
        return result
      }
        
        const addask = res.data.hits.map(el => el.recipe).map(el=> el.ingredientLines.map(el => ({ingr:el, ask:incl(el,ingredient)})))
        const recipes = res.data.hits.map(el => el.recipe).map((el,ind)=> ({...el, isFlipped:false, bookmarked:false, ask: addask[ind]}));
        
        const displayBook = true;
        this.setState({ recipes, displayBook });
        })
    }
  

    //change search ingredient
    handleInputChange = (event) => {
      event.preventDefault();
      const { target } = event;
      const { value } = target;
      this.setState({
        ingredient: value,
      });
    }

    //change username
    handleInputChangeUsername = (event) => {
      event.preventDefault();
      const target = event.target;
      const value = target.value;
      this.setState({
        username:value
      })
    }

    //display book
    getBook = (event) => {
      event.preventDefault();
      if(this.state.username==='') {
        alert(`Please, enter your username`);
    }
      else {
        axios
      .get("https://post-a-form.herokuapp.com/api/movies/")
      .then(res => {
         const booksUsername =  res.data.filter(book => book.poster === this.state.username).map (el => el.title).filter(el => el.includes('recipe') && el.indexOf('recipe')===0);
         const uniqueSet = new Set(booksUsername);
         const books = [...uniqueSet]

         if (books.length>0) {
                  let r = ''
                    for (let i=0;i<books.length;i++){
                      r+=`r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${books[i]}&`
                    }
                  const url= `https://api.edamam.com/search?${r}app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`

                    axios.get(url)
                          .then(res => {
                          const recipes = res.data;
                          const displayBook= false;
                          this.setState({recipes,displayBook});
                          })
                        }
            else {
              alert(`nothing in your bookmark`);
            }   

              })
              
    }
  }

    //mark a recipe change state.postBook
    handleStarChange = (uri) => {
        if(this.state.username==='') {
          alert(`Please, enter your username`);
      }
      else {
        const searchTerm = '#'; 
        const postBook = {
            title: uri.substring(uri.indexOf(searchTerm) + 1 ,uri.length),
            poster: this.state.username,
            comment: 'TRUE',
          };  
          
          let recipes=this.state.recipes
          const select = this.state.recipes.findIndex(el =>el.uri===uri)
          recipes[select].bookmarked=true
         
          this.setState({
             title: '',
             poster:'',
             comment:'',
             postBook: postBook,
             recipes
          }) 
      }
    }

    //mark a recipe api post
    componentDidUpdate(prevProps, prevState) {
      if(prevState.postBook !== this.state.postBook) {
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state.postBook)
          .then(res => res.data)
          .then(res => {
            alert(`BookmarK added ID: ${res.id} !`);
          })
          .catch(e => {
            console.error(e);
            alert(`Error Bookmark no added : ${e.message}`);
          });
        }
    }
    
    
  render() {
    console.log(this.state)
    const { ingredient, recipes,  username, displayBook } = this.state;
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
        />
    <DailyRecipe />

        <Container className="card-template">
          <Row>
              {recipes.map(r =>
               <Col sm={6} lg={4}>
              <ReactCardFlip isFlipped={r.isFlipped} flipDirection="vertical">
                <SingleCard
                  key = {r.uri}
                  title={r.label}
                  image={r.image}
                  flip={this.handleFlip}
                  uri={r.uri}
                  display= {displayBook}
                  bookmarkF={this.handleStarChange}
                  bookmarked={r.bookmarked}
                  url={r.url}
                 />           

                <SingleCardVerso
                  key = {r.uri}
                  title={r.label}
                  flip={this.handleFlip}
                  uri={r.uri}
                  ask={r.ask}
                  ingredientLines={r.ingredientLines}
                />
              </ReactCardFlip>
              </Col>
              )}
          </Row>
        </Container>

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
