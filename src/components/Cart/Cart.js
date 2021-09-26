import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //get the value
    const {cart} = props;
    //calculate total
    let total = 0;
    //for cart name
    let name = [];
    for(const item of cart){
        total = total + item.price;
        console.log(total)
        name = [...name,"", item.name];
    }
    //Showing the value as a list item
    const names = name.map( name => <li>{name}</li>)
 

    return (
        <div className="garage-items">
            <h3>Garage Item : {cart.length} </h3>
            <h2>Total : $ {total}</h2>
            <h1>Your Vehicle</h1>
            <ul>{names}</ul>
        </div>
    );
};

export default Cart;