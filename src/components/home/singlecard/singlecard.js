/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
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
  <Card>
    <div className="card-img-container">
      <div className="card-overlay">
        <div className="middle">Click to see ingredients</div>
      </div>
      <Card.Img
        variant="top"
        src={recipes.image}
        alt={recipes.title}
        onClick={() => flip(recipes.uri)}
      />
    </div>
    <Card.Link title="Link to instructions" href={recipes.url} target="_blank">
      <Card.Title>{recipes.label}</Card.Title>
    </Card.Link>
    <hr />
    <div className="bookmark-star">
      {(display) && (
      <span
        className={(recipes.bookmarked) ? 'is-bookmarked' : ''}
        onClick={() => bookmarkF(recipes.uri)}
      >
        &#9733;
      </span>
      )}
    </div>
    <Card.Body>
      <Card.Text>
        {(recipes.healthLabels.includes('Alcohol-Free'))
        && (
        <Card.Img
          src={alcool}
          alt="Alcohol-Free"
          title="Alcohol-Free"
        />
        )}
        {(recipes.healthLabels.includes('Tree-Nut-Free'))
        && (
        <Card.Img
          src={nut}
          alt="Tree-Nut-Free"
          title="Tree-Nut-Free"
        />
        )}
        {(recipes.healthLabels.includes('Peanut-Free'))
        && (
        <Card.Img
          src={peanut}
          alt="Peanut-Free"
          title="Peanut-Free"
        />
        )}
        {(recipes.healthLabels.includes('Vegetarian'))
        && (
        <Card.Img
          src={vegeterian}
          alt="vegeterian"
          title="vegeterian"
        />
        )}
        {(recipes.healthLabels.includes('Vegan'))
        && (
        <Card.Img
          src={vegan}
          alt="vegan"
          title="vegan"
        />
        )}
        {(recipes.healthLabels.includes('Sugar-Conscious'))
        && (
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
        <Badge className="badge-filter">
          {recipes.yield}
          {' '}
          servings
        </Badge>
      </ListGroupItem>
      <ListGroupItem>
        <Badge className="badge-filter">
          Calories:
          {Math.floor((recipes.calories) / recipes.yield)}
        </Badge>
      </ListGroupItem>
      <ListGroupItem>
        <Badge className="badge-filter">
          Time:
          {recipes.totalTime}
          {' '}
          minutes
        </Badge>
      </ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href={recipes.shareAs} target="_blank">See more</Card.Link>
    </Card.Body>
  </Card>
);
export default SingleCard;
