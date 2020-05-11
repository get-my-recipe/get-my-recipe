import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

import './singlecard.css';


const SingleCard = ({
  display, recipes, bookmarkF, flip,  
}) => (
  <Card>
    <Card.Img
      variant="top"
      src={recipes.image}
      alt={recipes.title}
      onClick={() => flip(recipes.uri)}
    />
    {(display) && (
    <span
      className={(recipes.bookmarked) ? 'is-bookmarked' : ''}
      onClick={() => bookmarkF(recipes.uri)}
    >
      &#9733;
    </span>
    )}
    <Card.Body>
      <Card.Title>{recipes.label}</Card.Title>
      <Card.Text>
        {recipes.healthLabels.join(" ")}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem><Badge variant="light">{recipes.yield} servings</Badge></ListGroupItem>
      <ListGroupItem><Badge variant="info">Calories: {Math.floor((recipes.calories)/recipes.yield)}</Badge></ListGroupItem>
    <ListGroupItem><Badge variant="success">Time: {recipes.totalTime} minutes</Badge></ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href={recipes.url} target="_blank">Instructions</Card.Link>
      <Card.Link href={recipes.shareAs} target="_blank">See more</Card.Link>
    </Card.Body>
  </Card>
);
export default SingleCard;
