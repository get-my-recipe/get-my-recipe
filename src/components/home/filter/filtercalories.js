
import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import './circular.css';

const FilterCalories = ({ handleOnChangeCalories }) => (


  <CircularSlider
    className="circuSlider"
    width={120}
    heigh={120}
    label="Calories"
    min={200}
    max={3000}
    dataIndex={3000}
    valueFontSize="1.5rem"
    labelColor="#9EB25D"
    labelBottom
    knobColor="#9EB25D"
    progressColorFrom="#EDFF71"
    progressColorTo="#9EB25D"
    progressSize={7}
    trackColor="#F1DB4B"
    trackSize={7}
    onChange={(value) => { handleOnChangeCalories(value); }}
  />
);


export default FilterCalories;
