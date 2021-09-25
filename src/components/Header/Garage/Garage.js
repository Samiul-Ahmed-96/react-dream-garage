import React, { useEffect, useState } from 'react';
import Vehicle from '../../Vehicle/Vehicle';
import './Garage.css';

const Garage = () => {
    const [vehicles,setVehicles] = useState([]);
    
    useEffect(()=>{
        fetch("./vehicle.json")
        .then(res => res.json())
        .then(data => setVehicles(data))
    },[])
    return (
        <div className="main-container">

            <div className="cart">
            
            </div>

            <div className="garage">
            {
                vehicles.map(vehicle => <Vehicle key={vehicle.name} vehicle={vehicle}></Vehicle>)
            }
            </div>
        
        </div>

    );
};

export default Garage;