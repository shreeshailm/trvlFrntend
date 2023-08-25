

import { BrowserRouter, Route, Routes } from "react-router-dom";

import First from "./firstpageafterlogin";
import Home from "./home";

import AboutUs from "./aboutUs";



import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


import AddHotelInventory from './hotel/addHotelInventory';
import AddHotel from "./hotel/addhotel";

import RegisterHotelOwner from "./hotel/registerhotelowner";

import AskToAddHotel from "./hotel/asktoaddhotel";
import GetAllHotels from "./hotel/getallhotels";
import HotelInventory from "./hotel/hotelInventory";
import AddCity from "./city/AddCity";
import CityList from "./city/GetAllCities";
import LoginUser from "./user/Login";
import AddUserDB from "./user/Registeruser";
import Register from "./register";





function App() {
  debugger
  return (
    <>
    <div className='container-fluid'>
   
   
  
    <BrowserRouter>
    <Routes>
    <Route exact path="/" Component={Home} />
    <Route path="/hotelInventory/:hotelId" Component={HotelInventory} />
    <Route exact path="/addhotelinventory" Component={AddHotelInventory} />
    <Route exact path="/login" Component={LoginUser} />
    <Route exact path="/registerhotelowner" Component={RegisterHotelOwner} />
    <Route exact path="/addhotel" Component={AddHotel} />
    <Route exact path="/asktoaddhotel" Component={AskToAddHotel} />
    <Route exact path="/aboutus" Component={AboutUs} />
    <Route exact path="/fdddd" Component={First} />
    <Route exact path="/getallhotels" Component={GetAllHotels} />
    <Route exact path="/register" Component={AddUserDB} />
    <Route exact path="/addcity" Component={AddCity} />
    <Route exact path="/getallcity" Component={CityList} />
    </Routes>
    </BrowserRouter>
    

  <ToastContainer/>
      </div>
  </>
  
    
      


  );
}

export default App;