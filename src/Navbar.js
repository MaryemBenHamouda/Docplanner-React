import React from 'react';

const Navbar = (props) =>{
    return (
       
             <header class="header">
                <div className="logo">
                    <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
                        width="268px" height="63px" alt="Groupe Docplanner" />
                    </div>
                    
                    <ul className="supmenu">
                        {props.data.map(el => <li className="menu-item">{el.title}
                            {el.subMenu && <ul className="sous-menu">{el.subMenu.map(el => <li className="sous-menu-item">{el}</li>)}</ul>}
                        </li>)}
                    </ul>
                {/* <ul className="list">  {props.data.map(el =>( 
                        el.subMenu ? <div className="dropdown">
                            <li className="supmenu">{ el.title}
                                {el.subMenu.map(elm=>  <li className="li">{elm}</li>)}
                            
                            </li>
                        
                            <ul className='sousmenu'>
                            </ul>
                        </div> 
                        :<li className="supmenu"> 
                        <a href={el.link}> {el.title}</a>
                        </li>))  
                    } 
                </ul> */}
               
            
            </header>
       
    ) 
}  
 export default Navbar;