import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Vehicle from '../../Vehicle/Vehicle';
import './Garage.css';

const Garage = () => {
    //use  State for vehicle items
    const [vehicles,setVehicles] = useState([]);
    //use State for cart items
    const [cart, setCart] = useState([])
    //use effect for load the data
    useEffect(()=>{
        fetch("./vehicle.json")
        .then(res => res.json())
        .then(data => setVehicles(data))
    },[])
    //Declare a function for event handling
    const handleAddToGarage = (vehicle) =>{
        const newCart = [...cart,vehicle];
        setCart(newCart);
    }



    return (
        //Main Container hold cart and garage item
        <div className="main-container">
            <div className="cart">
                <Cart cart={cart}></Cart>
            </div>
            <div className="garage">
            {
                vehicles.map(vehicle => <Vehicle 
                key={vehicle.name}
                vehicle={vehicle}
                handleAddToGarage = {handleAddToGarage}
                >
                </Vehicle>)
            }
            </div>
        
        </div>

    );
};

export default Garage;