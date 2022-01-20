import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './OurService.css';

const OurService = () => {
    return (
        <div className='mar'>
            
<section class="services" id="services">

<h1 class="heading"> our <span>services</span> </h1>

<div class="box-container">

    <div class="box">
        <i class="fas fa-car"></i>
        <h3>car selling</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <a href="#" class="btn"> read more</a>
    </div>

    <div class="box">
        <i class="fas fa-tools"></i>
        <h3>parts repair</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <a href="#" class="btn"> read more</a>
    </div>

    <div class="box">
        <i class="fas fa-car-crash"></i>
        <h3>car insurance</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <Link href="#" class="btn"> read more</Link>
    </div>

    <div class="box">
        <i class="fas fa-car-battery"></i>
        <h3>battery replacement</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, nisi.</p>
        <Link href="#" class="btn"> read more</Link>
    </div>

    

</div>

</section>
        </div>
    );
};

export default OurService;