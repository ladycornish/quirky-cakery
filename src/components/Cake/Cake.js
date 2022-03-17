import React from 'react';
import './Cake.css';

function Cake(props) {

    return (

        <div className="cake">
            <div className="image-container">
                <a href={props.linkSrc} ><img className="cake-img" src={`../images/${props.imgSrc}`} alt={props.alt} /></a>
            </div>
            <h3 className="cake-title">{props.title}</h3>
            <h4 className="cake-description">{props.category}</h4>
            
        </div>
    )

}


export default Cake;
