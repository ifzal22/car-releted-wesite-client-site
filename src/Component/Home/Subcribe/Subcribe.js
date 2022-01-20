import React from 'react';
import './Subcribe.css';
const Subcribe = () => {
    return (
        <div>
            <section className="newsletter"> 

            <h3>subscribe for latest updates</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, suscipit.</p>
    <form action="">
        <input className='EMAIL' type="email" placeholder="enter your email"/>
        <input className='SUB' type="submit" value="subscribe"/>
   </form>
                
            </section>
        </div>
    );
};

export default Subcribe;