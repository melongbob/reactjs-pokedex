import React from 'react';
import './styles/DetailView.css';

const DetailView = ({pokemon}) => {
    const{id, name, sprite, type, description} = pokemon;
    return(
        <section className="detail-view">
            <img src={sprite} className='sprite-image' alt="sprite" />
            <div className='data-wrapper'>
                <h2 className='data-name'>ID: {id} {name}</h2>
                <p className="data-char">Type: {type}</p>
                <p className="description">{description}</p>
            </div>
        </section>
    );
}

export default DetailView;