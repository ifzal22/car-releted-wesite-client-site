import React from 'react';
import './Future.css';
const FutureCar = () => {
    return (
        <div>
           {/* https://i.ibb.co/rbkhNhM/car-2.png
https://i.ibb.co/t8R986H/car-3.png
https://i.ibb.co/cCKLDvz/car-4.png
https://i.ibb.co/gZjF7nH/car-5.png
https://i.ibb.co/80kqWXz/car-6.png
https://i.ibb.co/4FBBRN0/car-7.png
https://i.ibb.co/2Wqgz1B/car-8.png */} 
<section className="featured" id="featured">

<h1 className="heading"> <span>featured</span> cars </h1>

<div className="swiper featured-slider">

   <div className="swiper-wrapper row">

        <div className="swiper-slide box col-md-4 shadow p-2">
            <img src=" https://i.ibb.co/rbkhNhM/car-2.png" alt=""/>
            <div className="content">
                <h3>new model</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">$55,000/-</div>
                <a href="#" className="btn">check out</a>
            </div>
        </div>

        <div className="swiper-slide box col-md-4 shadow p-2">
            <img src="https://i.ibb.co/t8R986H/car-3.png" alt=""/>
            <div className="content">
                <h3>new model</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">$55,000/-</div>
                <a href="#" className="btn">check out</a>
            </div>
        </div>

        <div className="swiper-slide box col-md-4 shadow p-2 ">
            <img src="https://i.ibb.co/cCKLDvz/car-4.png" alt=""/>
            <div className="content">
                <h3>new model</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">$55,000/-</div>
                <a href="#" className="btn">check out</a>
            </div>
        </div>


   </div>

   

</div>



</section>
        </div>
    );
};

export default FutureCar;