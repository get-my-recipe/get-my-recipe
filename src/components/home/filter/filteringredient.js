import React from "react";
import CircularSlider from '@fseehawer/react-circular-slider';
import './circular.css';
// import { ReactComponent as PowerIcon } from './assets/power.svg';

const Filteringredient =({handleInputChangeIngr}) => (

  
  <CircularSlider className='circuSlider' 
  width={120}
  heigh={120}
  label="Ingredients"
  min={1}
  max={20}
  dataIndex={4}
  valueFontSize = '1.5rem'
  // prependToValue="$"
  // appendToValue="K"
  labelColor="#9EB25D"
  labelBottom={true}
  knobColor="#9EB25D"
  progressColorFrom="#EDFF71"
  progressColorTo="#9EB25D"
  progressSize={7}
  trackColor="#F1DB4B"
  trackSize={7}
  onChange={ (value) => {handleInputChangeIngr(value) } }
>
  {/* <DragIcon x="9" y="8" width="18px" height="18px" /> */}
</CircularSlider>
    );


export default Filteringredient;


