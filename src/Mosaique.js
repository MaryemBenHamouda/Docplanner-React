import React from 'react'
import Images from './Images'
const Mosaique = props => {
    return (
        <div class="mosaique">
            {
                props.data.map(el => <Images item={el}/>)
            }
       
        </div>
        
    )
}

export default Mosaique