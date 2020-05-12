
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Filteringredient from '../filter/filteringredient';
import FilterDiet from '../filter/filterdiet';
import FilterHealth from '../filter/filterhealth';
import FilterCalories from '../filter/filtercalories';
import FilterTime from '../filter/filtertime';
import '../filter/filterdiet.css';


function Filter({
  handleInputChangeIngr, diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega, handleInputVege, handleInputPeanut, handleInputNutFree, handleInputSugar, handleInputAlcool,
  handleOnChangeCalories, handleOnChangeTime, show, handleClose,
}) {
  return (
    <>
      {show
          && (
            <Modal show={show}>
              <Modal.Header>
                <Modal.Title>Filter selection</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FilterDiet
                  diet={diet}
                  handleChangeDiet={handleChangeDiet}
                />
                <FilterHealth
                        vega={vega}
                        vege={vege}
                        peanut={peanut}
                        treenutfree={treenutfree}
                        sugar={sugar}
                        alcool={alcool}
                        handleInputVega={handleInputVega}
                        handleInputVege={handleInputVege}
                        handleInputPeanut={handleInputPeanut}
                        handleInputSugar={handleInputSugar}
                        handleInputAlcool={handleInputAlcool}
                        handleInputNutFree={handleInputNutFree}
                        /> 
                <Filteringredient 
                        handleInputChangeIngr={handleInputChangeIngr}

                      />
                <FilterCalories
                  handleOnChangeCalories={handleOnChangeCalories}
                />

                <FilterTime
                  handleOnChangeTime={handleOnChangeTime}
                />

              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Confirm filters
                </Button>
              </Modal.Footer>
            </Modal>
          )}


    </>
  );
}


export default Filter;
