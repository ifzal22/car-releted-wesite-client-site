import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import BookingModal from '../../bookingModal/BookingModal';
import './HotCar.css';
const HotCar = ({booking}) => {
    // const { name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);



const [allCars,setAllCars]= useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/AllCars')
       .then(res=>res.json())
       .then ( data => setAllCars(data))
   },[])
   console.log(allCars)
    return (
        <div>



            {/* https://i.ibb.co/m5GqQWz/car-1.png
https://i.ibb.co/rbkhNhM/car-2.png
https://i.ibb.co/t8R986H/car-3.png
https://i.ibb.co/cCKLDvz/car-4.png
https://i.ibb.co/gZjF7nH/car-5.png
https://i.ibb.co/80kqWXz/car-6.png
https://i.ibb.co/4FBBRN0/car-7.png
https://i.ibb.co/2Wqgz1B/car-8.png

https://i.ibb.co/HdjYyKC/vehicle-1.png
https://i.ibb.co/PjnprNG/vehicle-2.png
https://i.ibb.co/crGskYX/vehicle-3.png
https://i.ibb.co/kh128QF/vehicle-4.png

*/}
            <section className="vehicles " id="vehicles">

<h1 className="heading text-center"> popular <span>vehicles</span> </h1>

<div className="swiper vehicles-slider ">

    <div className="swiper-wrapper row">

      {
allCars.map(allcar => 
 
    
    <div className="swiper-slide box col-md-6 shadow p-2" key={allcar._id}>
    <img src={allcar.img}/>
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
     <Link>
     <button onClick={handleBookingOpen} href="#" className="btn">check out</button>
     </Link>
    </div>
</div>
    
    )
      }

<BookingModal
    //  date={data}
     booking={booking}
     openBooking={openBooking}
     handleBookingClose={handleBookingClose}
></BookingModal>
        

    </div>

    

</div>

</section>
        </div>
    );
};

export default HotCar;