import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image10 from '../../assets/images/Image10.jpg';
import Image6 from '../../assets/images/Image6.jpg';
import Image9 from '../../assets/images/Image9.jpg';
import './recipecarousel.css';


function RecipeCarousel() {
  return (
    <Container className="container-carousel">
      <Row>
        <Col className="title-recipe-of-the-day">
          <h4>Suggestions of the day</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block"
                src={Image10}
                alt="Recipe of the day"
              />
              <Carousel.Caption>
                <h3>First Recipe</h3>
                <p>Recipe title</p>
                <a href="link" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Image6}
                alt="Recipe of the day"
              />
              <Carousel.Caption>
                <h3>Second Recipe</h3>
                <p>Recipe title</p>
                <a href="link" />
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block"
                src={Image9}
                alt="Recipe of the day"
              />

              <Carousel.Caption>
                <h3>Third Recipe</h3>
                <p>Recipe title</p>
                <a href="link" />
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeCarousel;
