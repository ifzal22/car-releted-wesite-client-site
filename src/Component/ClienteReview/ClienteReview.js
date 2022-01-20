import React from 'react';
import './ClienteReview.css';
const ClienteReview = () => {
    return (
        <div>
            <section class="reviews" id="reviews">

<h1 class="heading"> client's <span>review</span> </h1>

<div class="swiper review-slider">

    <div class="swiper-wrapper row">

        <div class="swiper-slide box col-md-4 p-2 m-2 shadow-lg">
            <img src="https://i.ibb.co/pKgsWwm/pic-3.png" alt=""/>
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.</p>
                <h3>john deo</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

        <div class="swiper-slide box col-md-4 p-2 m-2">
            <img src="https://i.ibb.co/Cz8WQyR/pic-5.png" alt=""/>
            <div class="content">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam incidunt quod praesentium iusto id autem possimus assumenda at ut saepe.</p>
                <h3>john deo</h3>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
            </div>
        </div>

    

     

     

    

    </div>

    <div class="swiper-pagination"></div>

</div>

</section>
        </div>
    );
};

export default ClienteReview;