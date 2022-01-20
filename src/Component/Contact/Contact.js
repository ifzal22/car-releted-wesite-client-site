import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <section className="contact" id="contact">

<h1 className="heading"><span>contact</span> us</h1>

<div className="row">

{/* <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28950.105648963345!2d91.91085993604266!3d24.906057473995936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1642683599396!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}

    <form action="">
        <h3>get in touch</h3>
        <input type="text" placeholder="your name" className="box"/>
        <input type="email" placeholder="your email" className="box"/>
        <input type="tel" placeholder="subject" className="box"/>
        <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn"/>
    </form>

</div>

</section>
        </div>
    );
};

export default Contact;