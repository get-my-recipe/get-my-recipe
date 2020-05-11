import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './recipecarousel.css';


function RecipeCarousel({
  randomRecipes,
}) {
  return (
    <Container className="container-carousel">
      <Row>
        <Col className="col-carousel">
          <Carousel>
            {randomRecipes.map((randomRecipe) => (
              <Carousel.Item key={randomRecipe.uri}>
                <h4>{randomRecipe.label}</h4>
                <div className="recipe-instructions-link">
                  <a title="Click the image for recipe instructions" target="_blank" rel="noopener noreferrer" href={randomRecipe.url}>
                    <img
                      className="d-block m-auto"
                      src={randomRecipe.image}
                      alt="Recipe of the day"
                    />
                  </a>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default RecipeCarousel;
