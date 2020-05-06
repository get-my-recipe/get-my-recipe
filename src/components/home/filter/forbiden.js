import React, { Component } from 'react';
import ForbideItem from './forbideItem';
import './forbiden.css'



class Forbiden extends Component {
    constructor() {
        super();
    
        this.state = {
          items: [],
        };
      }

addItem = (e) => {
    if (this._inputElement.value !== "") {
        let newItem = {
            text: this._inputElement.value,
            key: Date.now()
        }
       
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(newItem)
            }
        }
        );
    }
    this._inputElement.value ="";
    console.log(this.state.items)
    e.preventDefault()
}
deleteItem = (key) => {
    const filterItems = this.state.items.filter(item => {
       return (item.key !== key)
    }
        )

        this.setState ({items : filterItems })
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
        entries={this.state.items}
        delete={this.deleteItem}
        />
        </div>

    )
}


}


export default Forbiden;