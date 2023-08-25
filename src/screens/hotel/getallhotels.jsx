import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function GetAllHotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:7070/hotel')
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Hotel List</h1>
      <div className="row">
        {hotels.map((hotel) => (
          <div className="col-md-3" key={hotel.hotelId}>
            <div className="card  bg-light mb-3" style={{ maxWidth: '30rem' }}>
              <div className="card-header" style={{ color: 'black'}}>{hotel.hotelId}</div>
              <div className="card-body">
                <h4 className="card-title">Name: {hotel.hotelName}</h4>
               <h5><p className="card-text">Description: {hotel.hotelDescription}</p>
                <p className="card-text">Address: {hotel.hotelAddress}</p></h5> 
                
                <center>
                <h6><Link  to={`/hotelInventory/${hotel.hotelId}`}>Get inventory</Link></h6>
                </center>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllHotels;


