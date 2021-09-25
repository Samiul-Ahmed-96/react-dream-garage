import React, { useEffect, useState } from 'react';
import './Garage.css';

const Garage = () => {
    const [vehicles,setVehicles] = useState([]);
    
    useEffect(()=>{
        fetch("./vehicle.json")
        .then(res => res.json())
        .then(data => setVehicles(data))
    },[])
    return (
        <div>
            {
                vehicles.map(vehicle => console.log(vehicle))
            }
        </div>
    );
};

export default Garage;