import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCardHandle = (product) => {
        const newCard = [...card, product];
        setCard(newCard);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCardHandle={addToCardHandle}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}></Card>
            </div>
            <div>
                <h2>how to work react ?</h2>
                <p>Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM. <br/> React allows you to effectively re-construct your DOM in JavaScript and push <br/> only those changes to the DOM which have actually occurred.</p>
                <h2>how usestate works ?</h2>
                <p>UseState is a Hook that allows you to have state variables in functional components. <br/> You pass the initial state to this function and it returns a variable with the current state value not necessarily the initial state <br/> and another function to update this value.</p>
            </div>
        </div>
        
    );
};

export default Shop;