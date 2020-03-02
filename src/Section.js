import React from 'react'
import StateItem from './StateItem'

const Section= (props)=>{
    return (
        <div className="bloc">
      <div className="container content">

            <div className="world">
                <p>The world's
                    biggest healthcare platform</p>
                <h5>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20
                    countries.</h5>
                <img src="https://www.docplanner.com/img/logo.png" alt=""/>
              
            </div>
            
            <div className="cases">
            {
                props.data.map(el=> <StateItem item={el}/>)
            }
                
             </div>
       
    </div>
        </div>

    )
 }

export default Section