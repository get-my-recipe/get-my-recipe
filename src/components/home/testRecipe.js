import React from 'react';


const TestRecipe = ({title,image}) => (
 <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
 </div>
  )


export default TestRecipe;
