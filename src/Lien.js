import React from 'react';

const Lien= (props)=>{
    return (
        <div className="align">
            <div className="about">
                <p> We are a global company with local culture  </p>
            </div>
            <div className="lien">
                {
                 props.data.map(el=> 
                 <div>
                        <svg className="svg svg1" width="167" height="32" viewBox={el.viewBox} xmlns={el.xmlns}>
                        <path d={el.path} />
                    
                        </svg>
                </div>
                )
                }
            </div>
       
        </div>
    )
}

export default Lien