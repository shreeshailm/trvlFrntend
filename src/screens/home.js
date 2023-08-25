import "../screens/style.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"






function Home() {

   
        const images = [
          "/images/cover.jpeg",
          "/images/cover.jpeg",
          "/images/cover.jpeg",
       
        ];


    return ( <>
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <img src="/images/logo.jpeg" alt="EaseMytrip Logo" className="rounded-circle" width="100" height="100" />
          </div>
          <div>
            <center><h1>Make your travel Easy with EaseMyTrip</h1></center>
          </div>
          <div className="d-flex align-items-center ms-auto">
            <img src="/images/Cover-minions.png" alt="User Profile" className="rounded-circle" height="50" />
          </div>
        </div>
  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/aboutus">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/addcity">Tour Packages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/asktoaddhotel">Have A Hotel?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/getallcity">Get all city</a>
              </li>
            </ul>
            <a href="/login" className="btn btn-primary ms-auto">Login</a>
          </div>
        </nav>
        <hr />


{/* 
        <div>
      <HoverCarousel images={images} />
    </div> */}


{/*   
        <div className="background" style={{ maxWidth: '80%', margin: 'auto' }}>
          <img src="/images/cover.jpeg" alt="Cover Photo" className="img-fluid rounded" />
        </div> */}


{/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src="/images/cover.jpeg" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/images/cover.jpeg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="/images/cover.jpeg" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div> */}

        
        <br></br><br></br><br></br><br></br>
<div>
<footer class="bg-light py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h4>Head Office</h4>
        <p>phase 4 hinjewadi</p>
      </div>
      <div class="col-md-4">
        <h4>Contact Us</h4>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@info.com</p>
      </div>
      <div class="col-md-4">
        <h4>Website Designer</h4>
        <p>Designed by: Project</p>
        <p>Contact: designer@info.com</p>
      </div>
    </div>
  </div>
</footer>

</div>

      </>);
}

export default Home;


