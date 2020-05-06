import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import RecipeCarousel from '../../recipecarousel/recipecarousel';
import '../header/header.css';


class ButtonCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  handleClose = () => {
    const { show } = this.state;
    this.setState({ show: !show });
  }

  getApi = () => {
    const apiID = 'a3b47c77';
    const apiKey = '742e6a73e3d13dd35b00ec2852aaf28d';
    const nb = 50;
    const url = `https://api.edamam.com/search?q=&app_id=${apiID}&app_key=${apiKey}&from=0&to=${nb}`;
    axios.get(url)
      .then((res) => console.log(res));
  }

  render() {
    const { show } = this.state;
    console.log(this.state)
    return (
      <div>
        <button
          type="button"
          className="display-carousel-button"
          onClick={this.handleShow}
        >
          Random Recipies
        </button>

        {show
          && (
            <Modal show={show} getApi={this.getApi}>
              <Modal.Header onHide={this.handleClose}>
                <Modal.Title>3 random recipies</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <RecipeCarousel />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
      </div>
    );
  }
}

export default ButtonCarousel;
