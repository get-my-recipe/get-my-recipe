import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactCardFlip from 'react-card-flip';
import SingleCard from '../home/singlecard/singlecard';
import SingleCardVerso from '../home/singlecard/singlecardverso';
import NavBarShared from '../sharedcomponents/navbarshared/navbarshared';
import '../home/home.css';

class Favourite extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }


        // flip the card
        handleFlip = (uri) => {
          const { recipes } = this.state;
          const select = recipes.findIndex((el) => el.uri === uri);
          if (recipes[select].isFlipped === true) {
            recipes[select].isFlipped = false;
          } else {
            recipes[select].isFlipped = true;
          }
          this.setState({ recipes });
        }


        render() {
          const { recipes, displayBook } = this.state;
          return (
            <div>
              <NavBarShared />
              <Container className="card-template">
                <Row>
                  {recipes.map((r) => (
                    <Col key={r.uri} sm={6} lg={4}>
                      <ReactCardFlip isFlipped={r.isFlipped} flipDirection="vertical">
                        <SingleCard
                          recipes={{ ...r }}
                          flip={this.handleFlip}
                          display={displayBook}

                        />
                        <SingleCardVerso
                          title={r.label}
                          flip={this.handleFlip}
                          uri={r.uri}
                          ask={r.ask}
                          ingredientLines={r.ingredientLines}
                          url={r.url}
                        />
                      </ReactCardFlip>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          );
        }
}


export default Favourite;
