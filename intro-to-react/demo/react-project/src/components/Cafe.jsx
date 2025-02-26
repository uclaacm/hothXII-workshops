import React, { useState } from 'react'
import './Cafe.css'

function Cafe(props) {

    const [likes, setLikes] = useState(0);

    return (
        <div className='cafe'>
            <h2 className='cafe-name'>{props.name}</h2>
            <p className='cafe-location'>Location: {props.location}</p>
            <p classname='cafe-likes'>Likes: {likes}</p>
            <img className='cafe-picture' src={props.picture}/>
            <button className='cafe-button' onClick={() => setLikes(likes + 1)}>Like!</button>
        </div>
    );
}

export default Cafe