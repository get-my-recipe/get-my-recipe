import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

import './singlecard.css';


const SingleCard = ({ title, image }) => (
      <Col sm={6} lg={4}>
        <Card>
          <Card.Img variant="top" src={image} alt={title} />
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
            <Card.Link href="#">Recipe Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
);
export default SingleCard;
