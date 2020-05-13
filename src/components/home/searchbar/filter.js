import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Filteringredient from '../filter/filteringredient';
import FilterDiet from '../filter/filterdiet';
import FilterHealth from '../filter/filterhealth';
import FilterCalories from '../filter/filtercalories';
import FilterTime from '../filter/filtertime';
import './filter.css';

function Filter({
  handleInputChangeIngr, diet, handleChangeDiet,
  vega, vege, peanut, treenutfree, sugar, alcool, handleInputVega, handleInputVege,
  handleInputPeanut, handleInputNutFree, handleInputSugar, handleInputAlcool,
  handleOnChangeCalories, handleOnChangeTime, show, handleClose,
}) {
  return (
    <>
      {show
          && (
            <Modal show={show}>
              <Modal.Header className="filter-modal-header">
                <Modal.Title><strong>Filter selection</strong></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FilterDiet
                  diet={diet}
                  handleChangeDiet={handleChangeDiet}
                />
                <hr />
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
                <hr />
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
                <button
                  type="button"
                  className="confirm-button"
                  variant="secondary"
                  onClick={handleClose}
                >
                  Confirm filters
                </button>
              </Modal.Footer>
            </Modal>
          )}
    </>
  );
}


export default Filter;
