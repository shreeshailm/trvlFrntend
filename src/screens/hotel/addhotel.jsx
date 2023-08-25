import { useState , useEffect} from 'react';

import{toast} from 'react-toastify';
import { addHotelapi } from '../../services/addHotelapi';
import { Link } from 'react-router-dom';




function AddHotel() {


  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [userName, setUserName] = useState('');


  useEffect(() => {
    // Retrieve the user's name from sessionStorage
    const storedUserName = sessionStorage.getItem('userName');

    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const addHotel = async () => {
    if (name.length === '') {
      toast.error('Please enter name')
    } else if (description.length === '') {
      toast.error('Please enter description')
    }else if (address.length === '') {
        toast.error('Please enter address')
      }else{

        const response = await addHotelapi(name, address,description)

        if (response['hotelId'] > 0) {
            const hotelId=response['hotelId']
            sessionStorage['hotelId'] = hotelId
            toast.success('hotel added successfully');
            setName('');
            setAddress('');
            setDescription('');

        }else {
            toast.error('could not add hotel please try again')
          }

          

      }
     
    }
    return (
        <>
        <center><h2>Welcome {userName}, to our collabe </h2></center>
        <br></br><br></br>
        <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Add Hotel Details</h1>

      <div className='row'>
        <div className='col'></div><div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Name</label>
              <input
                type='text'
                value={name}
                className='form-control'
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Address</label>
              <input
                type='text'
                value={address}
                className='form-control'
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              />
              {/* <input
                type='file'
                className='form-control'
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
              /> */}
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Description</label>
              <textarea id='description' 
               value={description}
                 name='description'  className='form-control'   rows='3'  required
                   onChange={(e) => {  setDescription(e.target.value); }}/>
            </div>
            <div className='mb-3'>
              
              <button onClick={addHotel} className='btn btn-success'>
                AddHotel
              </button>


            </div>
            <br></br><br></br>
            
          </div>

          <div>
          <button className='btn btn-success'>
      <Link to='/addhotelinventory'>AddInventory</Link>
     </button>
          </div>
        </div>
        
        <div className='col'></div><div className='col'></div>
      </div>
     
    </div>
        </>
      );
}

export default AddHotel;