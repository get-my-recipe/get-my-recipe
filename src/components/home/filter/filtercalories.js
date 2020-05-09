import React from "react";
import CircularSlider from '@fseehawer/react-circular-slider';
import './circular.css';
// import { ReactComponent as PowerIcon } from './assets/power.svg';

const FilterCalories =({handleOnChangeCalories}) => (

  
  <CircularSlider className='circuSlider' 
  width={120}
  heigh={120}
  label="Calories"
  min={200}
  max={5000}
  dataIndex={1500}
  valueFontSize = '1.5rem'
  // prependToValue="$"
  // appendToValue="cal"
  labelColor="#9EB25D"
  labelBottom={true}
  knobColor="#9EB25D"
  progressColorFrom="#EDFF71"
  progressColorTo="#9EB25D"
  progressSize={7}
  trackColor="#F1DB4B"
  trackSize={7}
  onChange={ (value) => {handleOnChangeCalories(value) } }
>
  {/* <DragIcon x="9" y="8" width="18px" height="18px" /> */}
</CircularSlider>
    );


export default FilterCalories;



