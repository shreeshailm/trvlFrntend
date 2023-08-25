
import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";
import { Link } from 'react-router-dom';
import { addUserapi } from '../services/addUserapi';
import { log } from '../utils/utils';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState('');
  const [panNumber, setPannumber] = useState('');
  const [dob, setBirthdate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      // Send data to the server
      const response = await addUserapi(firstName,lastName,email,password,panNumber,dob)
      setRegistrationStatus('Registration successful');
      setTimeout(() => {
        setRegistrationStatus('');
      }, 3000);


      // Handl the server respons
      log('Server response:', response.data);
    } catch (error) {
      // Handl any errors 
      setRegistrationStatus('Registration failed');
      console.error('Error:', error);
    }

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <br /><br /><br /><br /><hr /><br /><br />
      <div className='row'>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'>
          <div className='form' id="register">
            <h1>Register</h1>
            {registrationStatus && <p>{registrationStatus}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </form>
            

            <div >
              Already have an account? 
              <Link to="/login">Login</Link>
            </div>
          </div>
          </div>
        <div className='col'></div>
        <div className='col'></div>
      </div>
    </div>
      );
}
export default Register;