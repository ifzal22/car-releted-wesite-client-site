import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
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

const BookingModal = ({ openBooking, handleBookingClose, booking, date}) => {
    // const { name, time } = booking;

    const handleBookingSubmit = e => {
        alert('submitting');

        // collect data
        // send to the server

        handleBookingClose();
        e.preventDefault();
    }
 
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
                <Typography  id="transition-modal-title" variant="h6" component="h2">
                    {/* {name} */}
                </Typography>
                <form className='FROM TEXTFILED' onSubmit={handleBookingSubmit}   sx={{ width: '90%' }}>
                    <TextField
             
                        sx={{ width: '100%', m: 1, p:2}}
                        id="outlined-size-small"
                        // defaultValue={time}
                       
                    />
                    <TextField
                        sx={{ width: '100%', m: 1,p:2 }}
                        id="outlined-size-small"
                        defaultValue="Your Name"
                     
                    />
                    <TextField
                        sx={{ width: '100%', m: 1,p:2 , fontSize:'1.5rem'}}
                        id="outlined-size-small"
                        defaultValue="Your Email"
                      
                    />
                    <TextField
                        sx={{ width: '100%', fontSize:'2.5rem', m: 1,p:2 , fontSize:'1.5rem'}}
                        id="outlined-size-small"
                        defaultValue="Phone Number"
                      
                    />




                    {/* <TextField
                        disabled
                        sx={{ width: '90%', m: 1 }}
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    /> */}
                    <Button sx={{p:3, background:'yellow',color:'white', fontSize:'1.5rem'}}  variant="contained" className="btn" type="submit" >Submit</Button>
                </form>
            </Box>
        </Fade>
    </Modal>
    );
};

export default BookingModal;