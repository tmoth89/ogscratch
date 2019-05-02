import React, { useState } from 'react';
import { useSpring, animated as a} from 'react-spring';

const ArtUnit = (props) => {


    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1:0,
        transform: `perspective(600px) rotateX(${flipped ? 180: 0 }deg)`,
        config: { mass:5, tension:500, friction: 80}
    })
    console.log('artUnit:', props.image)
    return (
        <div className="artUnit view view-first" onClick = {() => set(state => !state)}>
        <div>
        <a.img src={props.image} style={{ 
            backgroundSize: 'cover', overflow: 'hidden', 
            opacity: opacity.interpolate(o => 1 - o), transform,
            }}/>
        </div>
        <a.div className="artInfo mask" style ={{ 
            opacity, 
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
            }} >
                <img src={props.image} style={{visibility: 'hidden'}} />
                <div className="info">
                    <h2 className="title"><strong>{props.title}</strong></h2>
                    <p className="description">Description: {props.description}</p>
                    <p className="material">Material: {props.material}</p>
                    <p className="price"><strong>Price: {props.price}</strong></p>
                </div>
        </a.div>
        </div>
    )
}

export default ArtUnit;