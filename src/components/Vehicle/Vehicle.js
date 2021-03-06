import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Vehicle.css';


const Vehicle = (props) => {
    //get the value using destructuring
    const {name,engine,tspeed,price,power,img} = props.vehicle;
    //Get the function
    const addToGarage = props.handleAddToGarage;
    return (
        <div className="vehicle-details">
            <div className="image-container"><img src={img} alt="" /></div>
            <h2>{name}</h2>
            <h3>Engine : {engine} </h3>           
            <h4>Power: Bhp {power} </h4>           
            <h5>Top Speed: {tspeed}</h5>
            <h1>Price : ${price}</h1>
            <button onClick={()=>addToGarage(props.vehicle)}>
            <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
            Add To Garage</button>       
        </div>
    );
};

export default Vehicle;