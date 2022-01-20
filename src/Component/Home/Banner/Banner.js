import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Banner.css';

const Banner = () => {
/* 
    document.querySelector('.home').onmousemove = (e) =>{

        document.querySelectorAll('.home-parallax').forEach(elm =>{
      
          let speed = elm.getAttribute('data-speed');
    //   console.log(speed)
          let x = (window.innerWidth - e.pageX * speed) / 90;
          let y = (window.innerHeight - e.pageY * speed) / 90;
      
          elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
      
        });
      
      };
 */
    return (
        <div>
<section class="home" id="home">

<h3 data-speed="-2" class="home-parallax">find your car</h3>

<img data-speed="5" className="home-parallax" src="https://i.ibb.co/PjgGm4C/home-img.png" alt=""/>

<Link to="/allService" data-speed="7" href="#" className="btn home-parallax">explore cars</Link>

</section>
        </div>
    );
};

export default Banner;