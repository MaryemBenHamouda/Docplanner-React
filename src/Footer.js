import React from "react"
 


const Footer= props=> {
    return (
      
        <div className="footer"> {
            props.txt.map(el => 
            <div>
                <p> {el.p} <a className="lin" href="#"> {el.lien} </a> </p> 
                        <p>{el.txt1}</p>
                    <p>{el.txt2}</p>
                    
            </div>
        ) 
         }</div>
        
    )
} 

export default Footer;

