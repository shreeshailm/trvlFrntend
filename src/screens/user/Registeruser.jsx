import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addUserapi } from "../../services/addUserapi";
import { toast } from "react-toastify";


function AddUserDB() {
 
    const navigate = useNavigate();

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [panNumber, setPannumber] = useState('');
    const [dob, setBirthdate] = useState('');

    const resetForm = () => {
      setFirstname('');
      setLastname('');
      setEmail('');
      setPassword('');
      setPannumber('');
      setBirthdate(''); 
    }
  
    const addUser = async () => 
    {
          const response = await addUserapi(firstName,lastName,email,password,panNumber,dob)
          
          if (response['userId'] > 0) 
          {
              toast.success('User added successfully');
              resetForm();
              setTimeout (()=>{
                  navigate('/login')
              },[3000])
          }
          else 
          {
              toast.error('could not added User please try again')
          }
    }
    return (
        <>
        {/* <center><h2>Welcome {userName}, to our collabe </h2></center>
        <br></br><br></br> */}
        <div>
          
          <br></br>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Register Your Account</h1>
        <br></br>
      <div className='row'>
        <div className='col'></div><div className='col'></div>
        <div className='col'>
        <form onSubmit={addUser}>
          <div className='form'>
            
            <div className='mb-3' bord>
              <label htmlFor=''>First Name</label>
              <input 
                type='text'
                className='form-control'
                value={firstName}
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Last Name</label>
              <input
                type='text'
                className='form-control'
                value={lastName}
                onChange={(e) => {
                  setLastname(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>PAN Number</label>
              <input
                type='text'
                className='form-control'
                value={panNumber}
                onChange={(e) => {
                  setPannumber(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Date Of Birth</label>
              <input
                type='date'
                className='form-control'
                value={dob}
                onChange={(e) => {
                  setBirthdate(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              
              <button type="submit" className='btn btn-success'>
                Register
              </button>


            </div>
            <br></br><br></br>
            
          </div>
          </form>
        </div>
        <div className='col'></div><div className='col'></div>
      </div>
    </div>
        </>
      );
}

export default AddUserDB