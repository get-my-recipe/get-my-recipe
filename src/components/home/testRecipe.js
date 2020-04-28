import React from 'react';
import './test.css';


const TestRecipe = ({display ,uri,title,image, bookmarked, bookmarkF}) => (
 <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      
      {(display) &&  (
      <button
              // className={({bookmarked}==='TRUE') ? 'is-bookmarked' : ''}
              onClick={() => bookmarkF(uri)}
            >
              &#9733;
      </button>
      )
      }

 </div>
  )
  
export default TestRecipe;
