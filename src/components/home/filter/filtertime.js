
import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import './circular.css';

const FilterTime = ({ handleOnChangeTime }) => (


  <CircularSlider
    className="circuSlider"
    width={120}
    heigh={120}
    label="Preparation"
    min={5}
    max={200}
    dataIndex={200}
    valueFontSize="1.2rem"
    appendToValue="min"
    labelColor="#9EB25D"
    labelBottom
    knobColor="#9EB25D"
    progressColorFrom="#EDFF71"
    progressColorTo="#9EB25D"
    progressSize={7}
    trackColor="#F1DB4B"
    trackSize={7}
    onChange={(value) => { handleOnChangeTime(value); }}
  />
);


export default FilterTime;
