import React from "react";
import img1 from "../1.jpg";
import img2 from "../2.jpg";
import img3 from "../3.jpg";
import Typed from "react-typed";


const header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
<div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100" alt="1"/>
      
       <div className="carousel-caption d-flex h-100 align-items-center justify-content-center d-md-block">
       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
       <h2>Web Development and website Promotions</h2>
        <Typed
           className="typed-text"
           strings={["Web Design", "Web Develoment", "Facebook Ads SMM","Google Ads"]}
           typeSpeed={40}
           backSpeed={80}
           loop
        /><br /><br />
           <a href="#" className="btn-main-offer">Contact me</a>

       </div>
      
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100" alt="2"/>
      <div className="carousel-caption d-flex h-100 align-items-center justify-content-center d-md-block">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h2>Second slide label</h2>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="3"/>
      <div className="carousel-caption d-flex h-100 align-items-center justify-content-center d-md-block" >
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h2>Third slide label</h2>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
   </button>
   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
 </div>
             </div>
         </div>
        
    )
}

export default header
