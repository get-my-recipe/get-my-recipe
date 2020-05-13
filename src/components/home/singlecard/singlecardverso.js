
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

import './singlecard.css';


const SingleCardVerso = ({
  uri, title, flip, ask, ingredientLines, url,
}) => (
  <Card onClick={() => flip(uri)}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>

      {(ask === undefined)

        ? (
          <ul>
            {ingredientLines.map((el) => (
              <li key={uuidv4()}>
                {el}
              </li>
            ))}
          </ul>
        )

        : (

          <ul>
            {ask.map((el) => (
              <li className={(el.ask === true) ? 'ask' : ''} key={uuidv4()}>
                {el.ingr}
              </li>
            ))}
          </ul>
        ) }

    </Card.Body>
    <ListGroup className="list-group-flush">

      <ListGroupItem>
        <Badge className="badge-filter">
          {ingredientLines.length}
          {' '}
          ingredients
        </Badge>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
export default SingleCardVerso;
