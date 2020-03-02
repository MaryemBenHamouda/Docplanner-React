import React from 'react'
import Button from 'react-bootstrap/Button'

const Images =props =>{
    return (
         <div className="img">
            <img scr={props.item.src}
                srcset={props.item.srcset} />
            <div className="img-lien">
                <p>{props.item.contry}</p>
                <Button><a href={props.item.button}>SEE OPNINGS</a></Button>
            </div>
        </div> 
    )
}

export default Images