import { useState } from 'react';
import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RecipeCarousel from '../carousel/carousel';
import './header/header.css';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        type="button"
        className="display-carousel-button"
        onClick={handleShow}
      >
        Random Recipies
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>3 random recipies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RecipeCarousel />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
