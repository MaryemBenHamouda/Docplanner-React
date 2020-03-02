import React from 'react'
const StateItem = props => {
    return (
        <div className={props.item.title=="Leader in 10 countries"? "case blo1":props.item.title=="30 million unique patients"? "case blo3": "case"}>
            <img className="doc" src={props.item.src} srcset={props.item.srcset} />
            <h3>{props.item.title}</h3>
            <p>{props.item.text}</p>
            
        </div>
    )
}

export default StateItem