import React, { Component } from 'react';
import FlipMove from 'react-flip-move'

class ForbideItem extends Component {

    createForbide = (item) => {
       return <li 
       onClick={() => this.delete(item.key)}
       key={item.key}>{item.text}</li>
    }

    delete = (key) => {
        this.props.delete(key)
    }

    render() {
       let listEntries = this.props.entries;
       let listItems = listEntries.map(this.createForbide)
    return(
        <ul className='theList' >
            <FlipMove duration={250} easing='ease-out'>
            {listItems}
            </FlipMove>
        </ul>
    )
    
    }

}
export default ForbideItem;