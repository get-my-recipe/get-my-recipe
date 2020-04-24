import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import Image14 from '../../assets/images/Image14.jpg';
import './cards.css';

const Cards = () => (
  <Container className="card-template">
    <Row>
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
        <Card>
          <Card.Img variant="top" src={Image14} />
          <Card.Body>
            <Card.Title>Recipe Title</Card.Title>
            <Card.Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        <Card>
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
        <Card>
          <Card.Img variant="top" src={Image14} />
          <Card.Body>
            <Card.Title>Recipe Title</Card.Title>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

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
        <Card>
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
