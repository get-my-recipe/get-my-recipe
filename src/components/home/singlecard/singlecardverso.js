import React from 'react';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

import './singlecard.css';


const SingleCardVerso = ({uri, title, flip, ask, ingredientLines }) => (
        <Card onClick={() => flip(uri)}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
           
            {(ask===undefined) ?   

            (
            <ul>{ingredientLines.map((el, id) => (
                        <li key={id}>
                           {el}</li>
                              ))}
                      </ul>  
            )
            
            :

            (

             <ul>{ask.map((el, id) => (
                        <li className={(el.ask===true) ? 'ask' : ''} key={id}>
                           {el.ingr}</li>
                              ))}
                      </ul>  
            ) }                
 
          </Card.Body>
          <ListGroup className="list-group-flush">
            
            <ListGroupItem><Badge variant="light">{ingredientLines.length} ingredients`</Badge></ListGroupItem>
            <ListGroupItem><Badge variant="info">Vegan</Badge></ListGroupItem>
            <ListGroupItem><Badge variant="success">Fast</Badge></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Recipe Link</Card.Link>
          </Card.Body>
        </Card>
);
export default SingleCardVerso;


