import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './HotCar.css';
const HotCar = () => {
    // const { name, time, space } = booking;
  

const [allCars,setAllCars]= useState([]);
   useEffect(()=>{
       fetch('https://car-releted-web.herokuapp.com/AllCars')
       .then(res=>res.json())
       .then ( data => setAllCars(data.slice(0, 4)))
   },[])
   console.log(allCars)

   
    return (
        <div>



         <section className="vehicles " id="vehicles">

<h1 className="heading text-center"> popular <span>Car'S</span> </h1>

<div className="swiper vehicles-slider ">

    <div className="swiper-wrapper row">


        {allCars.length === 0? <div className='d-flex text-center'><div className="spinner-border" role="status">
  <span className="sr-only">Loading...</span>
</div> <h1 className='text-prymari'>Lodding....</h1> </div>:''}

      {
allCars.map(allcar => 
 
    
    <div className="swiper-slide box col-md-6 shadow p-2" key={allcar._id}>
    <img src={allcar.img} alt=''/>
    <div className="content">
        <h3>{allcar.name} </h3>
        <div className="price"> <span>price : </span> {allcar.price} /- </div>
        <p>
            new
            <span className="fas fa-circle"></span> 2021
            <span className="fas fa-circle"></span> automatic
            <span className="fas fa-circle"></span> petrol
            <span className="fas fa-circle"></span> 183mph
        </p>
      <Link to={`/Booking/${allcar._id}`}>
      <button  href="#" className="btn">check out</button>
      </Link>
    </div>
</div>
    
    )
      }


        

    </div>

    

</div>

</section>
        </div>
    );
};

export default HotCar;