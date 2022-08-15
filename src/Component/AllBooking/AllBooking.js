import React, { useEffect, useState } from 'react';
import AllBookingShow from './AllBookingShow/AllBookingShow';

const AllBooking = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false)
    useEffect(()=>{
        fetch('https://car-releted-web.herokuapp.com/AllBooking')

        
        .then(res => res.json())
        .then(data => setAllOrders(data));
    },[isDeleted])
    return (
        <div>
            <div>
            <h1 className='text-center text-danger'>All Orders  {allOrders.length} </h1>

{
    allOrders.map((allOrder,index) =>
      <div>
   
   {/* <h1 className=''>Order {index} </h1>  */}
        <AllBookingShow key={allOrder._id} allOrder={allOrder} index={index} setIsDeleted={setIsDeleted}  ></AllBookingShow>
      </div>
       
    )
}


            </div>
        </div>
    );
};

export default AllBooking;