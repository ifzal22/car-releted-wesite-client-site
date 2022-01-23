// import { Rating, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ClienteReview.css';
const ClienteReview = () => {

     


    const [review,setReview]= useState([]);
    useEffect(()=>{
        fetch('https://whispering-refuge-31044.herokuapp.com/review')
        .then(res=>res.json())
        .then ( data => setReview(data))
    },[])
    console.log(review.Name)
 

    return (

        <div className=''>
             <h1 className="heading"> client's <span>review</span> </h1>
             <section className="reviews" id="reviews">

               
                
<div className="swiper review-slider">

    <div className="swiper-wrapper row">
        {
            review.map(p => 
  
                        <div className="swiper-slide box col-md-4 p-2 m-2 shadow-lg">
                            <img src={p.photoURL} alt=""/>
                            <div className="content">
                                <p>{p.Review}.</p>
                                <h3>{p.Name}</h3>
                                <div className="stars">
                                <Rating readonly
       initialRating={p.Rating}
       fullSymbol="fas fa-star fa-2px"
       emptySymbol="far fa-star fa-2px">
           </Rating>
             
                              {/*   <Stack spacing={1} className='text-center'>
      <Rating name="half-rating" defaultValue={p.Rating} />


     
    </Stack> */}

                                </div>
                            </div>
                        </div>
                
                )    
            }
                
                    </div>
                
             
                
                </div>
                
                </section> 
                
                )
        
        </div>
    )
};

export default ClienteReview;