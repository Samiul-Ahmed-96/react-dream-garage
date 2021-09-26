import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Vehicle from '../../Vehicle/Vehicle';
import './Garage.css';

const Garage = () => {
    const [vehicles,setVehicles] = useState([]);

    const [cart, setCart] = useState([])
    
    useEffect(()=>{
        fetch("./vehicle.json")
        .then(res => res.json())
        .then(data => setVehicles(data))
    },[])

    const handleAddToGarage = (vehicle) =>{
        const newCart = [...cart,vehicle];
        setCart(newCart);
    }



    return (
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