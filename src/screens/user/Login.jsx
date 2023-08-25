import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Authenticate } from "../../services/signInapi";


function LoginUser() {
 
    const navigate = useNavigate();
  

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const SignIn = async () =>
  {
    const response = await Authenticate(email,password);
          console.log(response.data);
    if (response['token'] != null) 
    {
      const userId=response['id']
      sessionStorage['userId'] = userId;

        const JWT=response['token']
        sessionStorage['token'] = JWT;
        
        toast.success('Login successful');
        setEmail('');
        setPassword('');

              setTimeout (()=>{
                  navigate('/getallhotels')
              },[2500])
    }
    else 
    {
        toast.error('Invalid Credential')
    }
  }

    return (
        <>
        {/* <center><h2>Welcome {userName}, to our collabe </h2></center>
        <br></br><br></br> */}
        <div style={{marginTop:150}}>
          <ToastContainer position='top-right' autoClose={2500}/>
          <br></br>
      <h2 style={{ textAlign: 'center', margin: 10 }}>Login To Your Account</h2>
        <br></br>
      <div className='row' >
        <div className='col'></div><div className='col'></div>
        <div className='col'>
          <div className='form'>
          <div className='mb-3'>
              <label htmlFor=''>Email</label>
              <input required
                type='text'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <center>
              <button onClick={()=>SignIn()} className='btn btn-primary'>
                Login
              </button>
                </center>
                

            </div>
            <br></br><br></br>
            
          </div>
          <center><div>
          Don't have an account? <Link to="/register">Register</Link>
          </div></center>
          
          
          
        </div>
        <div className='col'></div><div className='col'></div>
      </div>
    </div>
        </>
      );
}

export default LoginUser