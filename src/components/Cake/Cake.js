import React from 'react';
import './Cake.css';

export default function Card(props) {

    return (

        <div className="cake">
            <div className="image-container">
                <img className="cake-img" src={`../images/${props.imgSrc}`} alt={props.alt} />
            </div>
            <h3 className="cake-title">{props.title}</h3>
            <p className="cake-description">{props.description}</p>
        </div>
    )

}



