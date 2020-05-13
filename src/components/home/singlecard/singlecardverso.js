 
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Card from 'react-bootstrap/Card';
import { ListGroup, ListGroupItem, Badge } from 'react-bootstrap';
import './singlecard.css';
 
 
const SingleCardVerso = ({
 uri, title, flip, ask, ingredientLines, url,
}) => (
 <Card onClick={() => flip(uri)}>
   <Card.Body className="card-verso-body">
     <Card.Link title="Link to instructions" href={url} target="_blank">
       <Card.Title className="card-verso-title">{title}</Card.Title>
       <hr />
     </Card.Link>
     {(ask === undefined)
       ? (
         <ul className="card-verso-ul">
           {ingredientLines.map((el) => (
             <li key={uuidv4()}>
               {el}
             </li>
           ))}
         </ul>
       )
 
       : (
 
         <ul className="card-verso-ul">
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