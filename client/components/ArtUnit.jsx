import React from 'react';

const ArtUnit = (props) => {

    return (
        <div className="artUnit">
        <img src={props.image} style={{height: 800 }}></img>
        <p className="title"><strong>{props.title}</strong></p>
        <p className="description">Description: {props.description}</p>
        <p className="material">Material: {props.material}</p>
        <p className="price">Price: {props.price}</p>
        </div>
    )
}


export default ArtUnit;