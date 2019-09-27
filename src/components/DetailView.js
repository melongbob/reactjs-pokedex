import React from 'react';
import sprites from '../assets/sprites.png'
import './styles/DetailView.css';

const DetailView = ({pokemon}) => {
    const{id, name, sprite, type, weight} = pokemon;
    return(
        <section className="detail-view">
            <img src={sprite} className='sprite-image' alt="sprite" />
            <div className='data-wrapper'>
                <h3 className='data-name'>ID: {id} {name}</h3>
                <p className="data-char">Type: {type}</p>
                <p className="weight">Weight: {weight}lb</p>
            </div>
        </section>
    );
}

export default DetailView;