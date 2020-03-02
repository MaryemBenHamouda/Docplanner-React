import React from 'react';

const Towparagh =(props)=>{
    return (
        <div className="paragraphe">
           {
               props.texte.map(el=> <p>{el}</p>)
           } 

        </div>
    )

}

export default Towparagh;