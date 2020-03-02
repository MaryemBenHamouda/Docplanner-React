import React from 'react';
import { element } from 'prop-types';

const Card= (props)=>{
    return (
        <div className="blog"> 
        {  
            props.data.map(el=> <div className={el.nom=="For Patient"? "blog1" : "blog2"}>
                <div className="row">
                    <h2>{el.nom}</h2>
                </div>
                <div className="row">
                    <h1>{el.def}</h1>
                </div>
                <div>
                    {el.select ? 
                    <div className="row posit">
                        <select class="list" name="selection" id="">
                            <option value="0">CHOOSE CONTRY</option>
                            {el.select.map(element=>   
                                               
                                    <option value={element}>{element}</option>
                               ) }
                        </select>
                        <div className="col">
                            <img   className="image" src={el.lien} width="398px" height="250px"/>
                        </div>
                    </div>
                    :<div className="image">
                        <img src={el.lien} width="398px" height="250px"/>
                    </div>}
                </div>
            </div>
            )
            
         }
        </div>    
    )
}

export default Card;