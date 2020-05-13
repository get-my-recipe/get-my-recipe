/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import Card from 'react-bootstrap/Card';
import {
  ListGroup, ListGroupItem, Badge, Container, Row, Col,
} from 'react-bootstrap';
import alcool from '../../../assets/health/alcool.png';
import nut from '../../../assets/health/nut.png';
import peanut from '../../../assets/health/peanut.png';
import sugar from '../../../assets/health/sugar.png';
import vegan from '../../../assets/health/vegan.png';
import vegeterian from '../../../assets/health/vegeterian.png';
import './singlecard.css';


const SingleCard = ({
  display, recipes, bookmarkF, flip,
}) => (
  <Container>
    <Row xs={12} sm={12} md={12} lg={12}>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src={recipes.image}
            alt={recipes.title}
            onClick={() => flip(recipes.uri)}
          />
          {display && (
            <span
              className={recipes.bookmarked ? 'is-bookmarked' : ''}
              onClick={() => bookmarkF(recipes.uri)}
            >
              &#9733;
            </span>
          )}
          <Card.Body>
            <Card.Title>{recipes.label}</Card.Title>
            <Card.Text>
              {recipes.healthLabels.includes('Alcohol-Free') && (
                <Card.Img
                  src={alcool}
                  alt="Alcohol-Free"
                  title="Alcohol-Free"
                />
              )}
              {recipes.healthLabels.includes('Tree-Nut-Free') && (
                <Card.Img src={nut} alt="Tree-Nut-Free" title="Tree-Nut-Free" />
              )}
              {recipes.healthLabels.includes('Peanut-Free') && (
                <Card.Img src={peanut} alt="Peanut-Free" title="Peanut-Free" />
              )}
              {recipes.healthLabels.includes('Vegetarian') && (
                <Card.Img
                  src={vegeterian}
                  alt="vegeterian"
                  title="vegeterian"
                />
              )}
              {recipes.healthLabels.includes('Vegan') && (
                <Card.Img src={vegan} alt="vegan" title="vegan" />
              )}
              {recipes.healthLabels.includes('Sugar-Conscious') && (
                <Card.Img
                  src={sugar}
                  alt="Sugar-Conscious"
                  title="Sugar-Conscious"
                />
              )}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <Badge variant="light">
                {recipes.yield}
                {' '}
                servings
              </Badge>
            </ListGroupItem>
            <ListGroupItem>
              <Badge variant="info">
                Calories&nbsp;:&nbsp;
                {Math.floor(recipes.calories / recipes.yield)}
              </Badge>
            </ListGroupItem>
            <ListGroupItem>
              <Badge variant="success">
                Time&nbsp;:&nbsp;
                {recipes.totalTime}
                {' '}
                minutes
              </Badge>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={recipes.url} target="_blank">
              Instructions
            </Card.Link>
            <Card.Link href={recipes.shareAs} target="_blank">
              See more
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
export default SingleCard;
