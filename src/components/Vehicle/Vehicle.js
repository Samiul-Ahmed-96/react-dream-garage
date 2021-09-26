import React from 'react';
import './Vehicle.css';

const Vehicle = (props) => {
    const {name,engine,tspeed,price,power,img} = props.vehicle;
    const addToGarage = props.handleAddToGarage;
    return (
        <div className="vehicle-details">
            <div className="image-container"><img src={img} alt="" /></div>
            <h2>{name}</h2>
            <h3>Engine : {engine} </h3>           
            <h4>Power: Bhp {power} </h4>           
            <h5>Top Speed: {tspeed}</h5>
            <h1>Price : ${price}</h1>
            <button onClick={()=>addToGarage(props.vehicle)}>Add To Garage</button>       
        </div>
    );
};

export default Vehicle;