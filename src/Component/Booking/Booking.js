import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import BookingModal from './../bookingModal/BookingModal';
const Booking = ({ booking }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { id } = useParams();
    const [singleData, setSingleData] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/AllCars/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])
    console.log(singleData)
    return (
        <div className=' mt-5 pt-5'>
            <div className='my-5   text-center mx-auto pt-5 '>

                <h1>Muhsin {singleData.name}</h1>
                <h1>Muhammod muhibullah muhsin</h1>
                <h1>{singleData.name}</h1>
                <h1>{singleData.about}</h1>
                <img src={singleData.img} className='img-fluid' alt="" />
                <Link>
                    <button onClick={handleBookingOpen} href="#" className="btn">check out</button>
                </Link>

                <BookingModal
                    //  date={data}
                    booking={booking}
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}></BookingModal>
            </div>
        </div>
    );
};

export default Booking;