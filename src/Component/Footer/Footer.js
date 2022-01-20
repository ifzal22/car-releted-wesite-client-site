import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <section className="footer" id="footer">

<div className="box-container">

    <div className="box">
        <h3>our branches</h3>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> india </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> japan </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> france </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> russia </Link>
        <Link href="#"> <i className="fas fa-map-marker-alt"></i> USA </Link>
    </div>

    <div className="box">
        <h3>quick links</h3>
        <a href="#"> <i className="fas fa-arrow-right"></i> home </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> vehicles </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> services </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> featured </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> reviews </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> contact </a>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <a href="#"> <i className="fas fa-phone"></i> +123-456-7890 </a>
        <a href="#"> <i className="fas fa-phone"></i> +111-222-3333 </a>
        <a href="#"> <i className="fas fa-envelope"></i> shaikhanas@gmail.com </a>
        <a href="#"> <i className="fas fa-map-marker-alt"></i> mumbai, india - 400104 </a>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <a href="#"> <i className="fab fa-facebook-f"></i> facebook </a>
        <a href="#"> <i className="fab fa-twitter"></i> twitter </a>
        <a href="#"> <i className="fab fa-instagram"></i> instagram </a>
        <a href="#"> <i className="fab fa-linkedin"></i> linkedin </a>
        <a href="#"> <i className="fab fa-pinterest"></i> pinterest </a>
    </div>

</div>

<div className="credit shadow"> created by mr. IFZAL HUSSAIN</div>

</section>
        </div>
    );
};

export default Footer;