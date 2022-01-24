import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../Header/Header';
import '../Home/HotCar/HotCar2/HotCar2.css';
import BookingModal from './../bookingModal/BookingModal';
const Booking = ({ booking }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { id } = useParams();
    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        fetch(`https://whispering-refuge-31044.herokuapp.com/AllCars/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])
    console.log(singleData)
    return ( 

        <>
         <Header></Header>  
        <div className='BOOK mt-8 pt-5 mx-auto'>
           
{/* 
                <h1> {singleData.name}</h1>
                <img src={singleData.img} className='img-fluid' alt="" />
              
                <h1>{singleData.about}</h1>
             
                <Link>
                    <button onClick={handleBookingOpen} href="#" className="btn">check out</button>
                </Link> */}



<section className="vehicles " id="vehicles">

<h1 className="heading text-center"><span> {singleData.name}</span> </h1>

<div className="swiper vehicles-slider ">

    <div className="swiper-wrapper row mx-auto">


 
    
    <div className="swiper-slide box col-md-8 shadow p-2 mx-auto" >
    <img src={singleData.img} alt=''/>
    <div className="content">
        <h3>{singleData.name} </h3>
        <p>{singleData.about}</p>
        <div className="price"> <span>price : </span> {singleData.price} /- </div>
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
    
    


        

    </div>

    

</div>

</section>




                <BookingModal
                    //  date={data}
                    booking={booking}
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}></BookingModal>
          
        </div>
        </>
    );
};

export default Booking;