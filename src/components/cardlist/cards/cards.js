import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import Image14 from '../../../assets/images/Image14.jpg';
import './cards.css';

const Cards = () => (
  <Container fluid className='card-template' >
    <Row >
      <Col sm={6} lg={4}>
        <Card>
          <Card.Img variant="top" src={Image14} />
          <Card.Body>
            <Card.Title>Recipe Title</Card.Title>
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
      <Col sm={6} lg={4}>
        <Card >
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
      </Col>
      <Col sm={6} lg={4}>
        <Card >
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
      </Col>
      <Col sm={6} lg={4}>
        <Card >
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
      </Col>
      <Col sm={6} lg={4}>
        <Card >
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
      </Col>
      <Col sm={6} lg={4}>
        <Card >
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
      </Col>
    </Row>
  </Container>

);
export default Cards;
