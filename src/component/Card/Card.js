import React from 'react';
import Product from '../Product/Product';
import './Card.css'
const Card = ({ card }) => {
    return (
        <div className='card'>
            <h4>Selected item</h4>
            <p>item: {card.length}</p>
            <div className='choose-item'>
            <button>Choose</button> <br/>
            <button>Remove</button>
            </div>
        </div>
    );
};

export default Card;