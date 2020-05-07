import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './recipecarousel.css';


function RecipeCarousel({
  randomRecipes
}) {

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
            {randomRecipes.map((randomRecipe) => (
              <Carousel.Item key={randomRecipe.uri}>
                <img
                  className="d-block"
                  src={randomRecipe.image}
                  alt="Recipe of the day"
                />
                <Carousel.Caption>
                  <h3>First Recipe</h3>
                  <p>{randomRecipe.label}</p>
                  <a href={randomRecipe.url}>Instructions</a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeCarousel;
