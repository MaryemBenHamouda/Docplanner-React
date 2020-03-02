import React from 'react'

const Office = (props)=>{
    return (
        <div class="text">
        {
           
            props.data.map(el=>
                 <div><center>
                      <h1 class="style">{el.title}</h1>
                    <p>{el.paragh}</p>
                 </center>
                    
                </div>)
       
        } </div>
           
    )
            
}
export default Office
