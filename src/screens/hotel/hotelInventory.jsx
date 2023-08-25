// HotelInventory.js (Component for displaying inventory)

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function HotelInventory() {
  const { hotelId } = useParams();
  const [inventories, setInventory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7070/hotelInventory/${hotelId}`)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((error) => {
        console.error('Error fetching inventory:', error);
      });
  }, [hotelId]);

  return (
    <div className="container">
      <h1>Inventory for Hotel {hotelId}</h1>

      <div className="row">
        {inventories.map((inventory) => (
          <div className="col-md-3" key={inventory.iventoryId}>
            <div className="card text-white bg-info mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header">{inventory.date}</div>
              <div className="card-body ">
                <h4 className="card-title">Room: {inventory.availableRoom}</h4>
                <p className="card-text">Description: {inventory.roomPrice}</p>
                
              </div>
            </div>

          </div>

        ))

        }
      </div>


    </div>


  );
}

export default HotelInventory;
