import React from "react";
import CircularSlider from '@fseehawer/react-circular-slider';
import './circular.css';
// import { ReactComponent as PowerIcon } from './assets/power.svg';

const FilterTime =({handleOnChangeTime}) => (

  
  <CircularSlider className='circuSlider' 
  width={120}
  heigh={120}
  label="Preparation"
  min={5}
  max={200}
  dataIndex={200}
  valueFontSize = '1.2rem'
  // prependToValue="min"
  appendToValue="min"
  labelColor="#9EB25D"
  labelBottom={true}
  knobColor="#9EB25D"
  progressColorFrom="#EDFF71"
  progressColorTo="#9EB25D"
  progressSize={7}
  trackColor="#F1DB4B"
  trackSize={7}
  onChange={ (value) => {handleOnChangeTime(value) } }
>
  {/* <DragIcon x="9" y="8" width="18px" height="18px" /> */}
</CircularSlider>
    );


export default FilterTime;



