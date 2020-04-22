import React from 'react';
import Card from 'react-bootstrap/Card';
import Image14 from '../../../assets/images/Image14.jpg';
import { CardColumns, ListGroup, ListGroupItem } from 'react-bootstrap';
import './Cards.css';

const Cards = () => (
  <CardColumns>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image14} />
      <Card.Body>
        <Card.Title>Recipe Title</Card.Title>
        <Card.Text>
          Recipe description
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Restriction 1</ListGroupItem>
        <ListGroupItem>Restriction 2</ListGroupItem>
        <ListGroupItem>Restriction 3</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Recipe Link</Card.Link>
      </Card.Body>
    </Card>
  </CardColumns>
);
export default Cards;
