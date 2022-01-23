import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './OurService.css';

const OurService = () => {
    return (
        <div className='mar'>
            
<section className="services" id="services">

<h1 className="heading"> our <span>services</span> </h1>

<div className="box-container">

    <div className="box">
        <i className="fas fa-car"></i>
        <h3>car selling</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <a href="#" className="btn"> read more</a>
    </div>

    <div className="box">
        <i className="fas fa-tools"></i>
        <h3>parts repair</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <a href="#" className="btn"> read more</a>
    </div>

    <div className="box">
        <i className="fas fa-car-crash"></i>
        <h3>car insurance</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <Link href="#" className="btn"> read more</Link>
    </div>

    <div className="box">
        <i className="fas fa-car-battery"></i>
        <h3>battery replacement</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <Link href="#" className="btn"> read more</Link>
    </div>

    

</div>

</section>
        </div>
    );
};

export default OurService;