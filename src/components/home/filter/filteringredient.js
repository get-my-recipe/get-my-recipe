import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import './circular.css';

const Filteringredient = ({ handleInputChangeIngr }) => (
  
  <CircularSlider
    className="circuSlider"
    width={120}
    heigh={120}
    label="Ingredients"
    min={1}
    max={20}
    dataIndex={20}
    valueFontSize="1.5rem"
    labelColor="#9EB25D"
    labelBottom
    knobColor="#9EB25D"
    progressColorFrom="#EDFF71"
    progressColorTo="#9EB25D"
    progressSize={7}
    trackColor="#F1DB4B"
    trackSize={7}
    onChange={(value) => { handleInputChangeIngr(value); }}
  />
);

export default Filteringredient;
