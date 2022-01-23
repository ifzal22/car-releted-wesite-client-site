import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import React, { useState } from 'react';
import '../../ClienteReview/ClienteReview.css';
import useAuth from '../../Hooks/UseAuth';



const Review = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      };



    const { user } = useAuth();
    const initialInfo = { Name: user.displayName,   }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value)
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }


    const photoURL = user.photoURL;
    const d = new Date()
    d.toLocaleDateString()

    const handleBookingSubmit = e => {
        const booking = {
            ...bookingInfo,
            date : d.toLocaleDateString(),
            photoURL: photoURL
         
        }

        fetch('http://localhost:5000/review', {
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
                    handleOnBlur('')
                    
                }
            });

            e.preventDefault();
            handleOnBlur('')
    }

    return (
        <div>
            <section className="contact" id="contact">

{/* <h1 className="heading"><span>Enter Your</span>Review </h1> */}

<div className="row">


    <form onSubmit={handleBookingSubmit} action="">
        <h3>Enter Your Review</h3>
        <input 
         onBlur={handleOnBlur}
         defaultValue={user.displayName}
        type="text" placeholder="your name" className="box"/>
      
<input

type="number"
onBlur={handleOnBlur}
 placeholder="your RAITNG" className="box"
name='Rating'
defaultValue={value}
/>
<Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>


        <textarea 
        name='Review'
        onBlur={handleOnBlur}
        placeholder="your message" className="box" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn"/>
    </form>

</div>

</section>
        </div>
    );
};

export default Review;