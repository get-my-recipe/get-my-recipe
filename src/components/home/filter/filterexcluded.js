
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ForbideItem from './forbideItem';




class FilterExcluded extends Component {
    constructor() {
        super();
    
        this.state = {
            excluded: [],
        };
      }

addItem = (e) => {
    if (this._inputElement.value !== "") {
        let newItem = {
            text: this._inputElement.value,
            key: uuidv4()
        }
       
        this.setState((prevState) => {
            return {
                excluded: prevState.excluded.concat(newItem)
            }
        }
        );
    }
    this._inputElement.value ="";
    console.log(this.state.excluded)
    e.preventDefault()
}
deleteItem = (key) => {
    const filterexcluded = this.state.excluded.filter(item => {
       return (item.key !== key)
    }
        )

        this.setState ({excluded : filterexcluded })
}



render() {
    return (
        <div className='forbideItem'>
            <form onSubmit={this.addItem}>
                <input
                ref={(a) => this._inputElement = a }
                placeholder="Enter ingredient you don't want" >
                </input>
                <button type='submit'>add item</button>
            </form>
      
        <ForbideItem 
        entries={this.state.excluded}
        delete={this.deleteItem}
        />
        </div>

    )
}


}


export default FilterExcluded;

