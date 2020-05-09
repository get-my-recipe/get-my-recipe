
import React, { useState  } from "react";
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button'
import Filteringredient from '../filter/filteringredient';
import FilterDiet from '../filter/filterdiet';
import FilterHealth from '../filter/filterhealth';
import FilterCalories from '../filter/filtercalories';
import FilterTime from '../filter/filtertime';

function Filter({valueIngr,handleInputChangeIngr,decrementIngr,incrementIngr,diet,handleChangeDiet,
vega,vege,peanut,treenutfree,sugar,alcool,handleInputVega,handleInputVege,handleInputPeanut,handleInputNutFree,handleInputSugar,handleInputAlcool,
caloriesMax,handleOnChangeCalories,timeMax,handleOnChangeTime}) {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Filter
        </Button>

        
        <Collapse in={open}>
          <div id="example-collapse-text">
          <Filteringredient
                        valueIngr={valueIngr}
                        handleInputChangeIngr={handleInputChangeIngr}
                        decrementIngr={decrementIngr}
                        incrementIngr={incrementIngr}
                      />
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
           <FilterCalories
                       caloriesMax={caloriesMax}
                       handleOnChangeCalories={handleOnChangeCalories}
                       /> 
            <FilterTime
                       timeMax={timeMax}
                       handleOnChangeTime={handleOnChangeTime}
                       />                            

          </div>
        </Collapse>
      </>
    );
  }
  
 


  export default Filter