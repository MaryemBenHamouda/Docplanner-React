import React from 'react';


const Header = (props)=>{
    return (
        <div className="title"> 
            {
                props.text.map((el,i)=> 
                i==0? <center><img  src={el}></img></center>:<h1>{el}</h1> )}
         </div>        
       
    )
}




export default Header;