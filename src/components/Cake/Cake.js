import React from 'react';
import './Cake.css';

function Cake(props) {

    return (

        <div className="cake">
            <div className="image-container">
                <img className="cake-img" src={`../images/${props.imgSrc}`} alt={props.alt} />
            </div>
            <h3 className="cake-title">{props.title}</h3>
            <h4 className="cake-description">{`Category: - ${props.category}`}</h4>
            
        </div>
    )

}


export default Cake;
