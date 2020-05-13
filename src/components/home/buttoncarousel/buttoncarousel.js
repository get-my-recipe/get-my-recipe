import React from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import RecipeCarousel from '../recipecarousel/recipecarousel';
import Loader from '../loader/loader';
import './buttoncarousel.css';

class ButtonCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isShowing: false,
      randomRecipes: [],
    };
  }

  handleClick = () => {
    this.handleShow();
    this.getApi();
  }

  handleShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  handleClose = () => {
    const { show } = this.state;
    this.setState({ show: !show });
    this.handleShowStatus();
  }

  handleShowStatus = () => {
    const { isShowing } = this.state;
    this.setState({ isShowing: !isShowing });
  }

  getApi = () => {
    const apiID = 'a3b47c77';
    const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
    const nb = 100;
    const url = `https://api.edamam.com/search?q=&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}&diet=balanced`;
    axios.get(url)
      .then((res) => {
        const min = 1;
        const max = 100;
        const randomrecipes = res.data.hits.map((randomrecipe) => randomrecipe.recipe);
        const randomRec1 = randomrecipes[Math.floor(Math.random() * (max - min) + min)];
        const randomRec2 = randomrecipes[Math.floor(Math.random() * (max - min) + min)];
        const randomRec3 = randomrecipes[Math.floor(Math.random() * (max - min) + min)];
        const randomRecipeArr = [randomRec1, randomRec2, randomRec3];
        this.setState({ randomRecipes: randomRecipeArr });
        this.handleShowStatus();
      });
  }

  render() {
    const { show, randomRecipes, isShowing } = this.state;
    return (
      <div className="carousel-button-container">
        <button
          type="button"
          className="carousel-button"
          onClick={this.handleClick}
        >
          Random Recipies
        </button>

        {show
          && (
              <Modal show={show} className="modal-carousel">
                <Modal.Header>
                  <Modal.Title>3 random recipies</Modal.Title>
                  <button
                    type="button"
                    title="Close the window"
                    className="carousel-closing-button"
                    onClick={this.handleClose}
                  >
                    x
                  </button>
                </Modal.Header>
                <Modal.Body>
                  {isShowing
                    ? (
                      <RecipeCarousel
                        randomRecipes={randomRecipes}
                      />
                    ) : (
                      <Loader />
                    )}
                </Modal.Body>
                <Modal.Footer>
                  <button
                    type="button"
                    title="Close the window"
                    className="carousel-closing-button"
                    onClick={this.handleClose}
                  >
                    Close
                  </button>
                </Modal.Footer>
              </Modal>
          )}
      </div>
    );
  }
}

export default ButtonCarousel;
