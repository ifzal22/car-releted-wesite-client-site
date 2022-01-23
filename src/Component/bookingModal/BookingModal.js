import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/UseAuth';
import './BookingModal.css';
const style = {
position: 'absolute',
top: '50%',
left: '50%',
transform: 'translate(-50%, -50%)',
width: 500,
bgcolor: 'background.paper',
border: '2px solid #000',
boxShadow: 24,
p: 4,
};


const BookingModal = ({ openBooking, handleBookingClose, }) => {
// const { name, time } = booking;


const [allCars,setAllCars]= useState([]);
   useEffect(()=>{
       fetch('http://localhost:5000/AllCars')
       .then(res=>res.json())
       .then ( data => setAllCars(data))
   },[])
const img = allCars.img;
console.log(img)
const { user } = useAuth();

const initialInfo = { Name: user.displayName, email: user.email, phone: '' }
const [bookingInfo, setBookingInfo] = useState(initialInfo);

const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field)
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
}


const d = new Date()

d.toLocaleDateString()

const handleBookingSubmit = e => {
    const booking = {
        ...bookingInfo,
        date : d.toLocaleDateString(),
     
    }
    // console.log(booking)
    // send to the server
    fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                // setBookingSuccess(true);
                alert('success full your BOOKING')
                handleBookingClose();
            }
        });


// collect data
// send to the server

// handleBookingClose();
e.preventDefault();
}
// const date = ()=>{
//     <Datetime />
// }

return (
<Modal
aria-labelledby="transition-modal-title"
aria-describedby="transition-modal-description"
open={openBooking}
onClose={handleBookingClose}
closeAfterTransition
BackdropComponent={Backdrop}
BackdropProps={{
    timeout: 500,
}}
>
<Fade in={openBooking}>
    <Box sx={style}>
        <Typography id="transition-modal-title" variant="h2" component="h2">
            {/* {name} */}
        </Typography>
        <form className='FROM TEXTFILED' onSubmit={handleBookingSubmit} sx={{ width: '90%' }}>
            {/*  <TextField
    
            sx={{ width: '100%', m: 1, p:2}}
            id="outlined-size-small"
            // defaultValue={ReactDatetimeClass}
        

            
        /> */}
            <TextField
            
                sx={{ width: '100%', m: 1, p: 2 }}
                id="outlined-size-small"
                name="Name"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}

            />
            <TextField
                sx={{ width: '100%', m: 1, p: 2, fontSize: '1.5rem' }}
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}

            />
            <TextField
                sx={{ width: '100%', fontSize: '2.5rem', m: 1, p: 2, fontSize: '1.5rem' }}
                id="outlined-size-small"
                type="number"
                name="phone"
                onBlur={handleOnBlur}
                placeholder='Phone Number'
            />




            {/* <TextField
            disabled
            sx={{ width: '90%', m: 1 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
        /> */}
            <Button sx={{ p: 3, background: 'yellow', color: 'white', fontSize: '1.5rem' }} variant="contained" className="btn" type="submit" >Submit</Button>
        </form>
    </Box>
</Fade>
</Modal>
);
};

export default BookingModal;