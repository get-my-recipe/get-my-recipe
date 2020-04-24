import React from 'react';


const Searchbar = ({value, handleInputChange, updateAPI}) => (
    <form>
      <input type='text'
             value={value}
             onChange={handleInputChange}
             />          
      <button onClick={updateAPI} > Search </button>
      
    </form>
  )


export default Searchbar;