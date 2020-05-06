import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

import './singlecard.css';


const SingleCard = ({ display ,uri,title,image, bookmarkF, flip, bookmarked, url }) => (
        <Card>
          <Card.Img variant="top" src={image} alt={title}
          onClick={() => flip(uri)} />
          {(display) &&  (
          <span
                  className={(bookmarked) ? 'is-bookmarked' : ''}
                  onClick={() => bookmarkF(uri)}
                >
                  &#9733;
          </span>
      )
      }
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Recipe description
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem><Badge variant="light">Light</Badge></ListGroupItem>
            <ListGroupItem><Badge variant="info">Vegan</Badge></ListGroupItem>
            <ListGroupItem><Badge variant="success">Fast</Badge></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={url}  target="_blank">Recipe</Card.Link>
          </Card.Body>
        </Card>
);
export default SingleCard;
