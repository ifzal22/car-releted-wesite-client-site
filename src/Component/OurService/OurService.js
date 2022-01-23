import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './OurService.css';

const OurService = () => {



    const [services, setServices] = useState([]);
   
    useEffect(()=>{
        fetch('https://whispering-refuge-31044.herokuapp.com/services')

        
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

console.log(services)
    return (
        <div className='mar'>
            
<section className="services" id="services">

<h1 className="heading"> our <span>services</span> </h1>

<div className="box-container">

 {
     services.map(service => 
        
        <div className="box">
        <i className="fas fa-car"></i>
        <h3> {service.name} </h3>
        <p> {service.about}.</p>
        <Link href="#" className="btn"> read more</Link>
    </div>     
        
        
        
        
        )
 }



  

    

</div>

</section>
        </div>
    );
};

export default OurService;