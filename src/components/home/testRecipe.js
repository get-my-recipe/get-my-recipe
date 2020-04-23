import React from 'react';
import './test.css';


const TestRecipe = ({uri,title,image, bookmarked, bookmarkF}) => (
 <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <div>book: {({bookmarked}===true) ? "TRUE" : "FALSE"}</div>
      <span
              className={({bookmarked}===true) ? 'is-bookmarked' : ''}
              onClick={() => bookmarkF({uri})}
            >
              &#9733;
      </span>
 </div>
  )


export default TestRecipe;
