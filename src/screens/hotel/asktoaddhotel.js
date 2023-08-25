
import "../../screens/style.css";
import { Link } from 'react-router-dom';



function AskToAddHotel() {

   

    return ( <>
    
    
    <div className="about-us-container">
  
      <h1 className="about-us-header">Welcome to Our Travel Management Website</h1>
      <hr></hr><br></br><br></br>
      <p className="about-us-content">
        Are you a hotel owner looking to showcase your property to travelers
        worldwide? Join our platform and reach a global audience.
      </p>
      <p className="about-us-content">
        By adding your hotel to our website, you can increase your visibility,
        attract more guests, and grow your business.
      </p>
      <p className="about-us-content">
        Hotel Owners: Click <Link to="/registerhotelowner">here</Link> to add your hotel to
        our platform.
      </p>
    </div>

    </>);
}

export default AskToAddHotel;