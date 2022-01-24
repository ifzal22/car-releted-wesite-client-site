import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './About.css';
const About = () => {
    return (
      <>
       <Header></Header> 
        <div className='container row mx-auto' >

            <div className='card col-md-6 '>
<img
className="card__image"
src="https://avatars.githubusercontent.com/u/86636763?v=4" alt="" />
<p class="card__name"> Muhsin  Devolaper</p>
<div className='grid-container'>
<div className='grid-child-posts'>
156 Post
</div>
<div className='grid-child-followers'>
100Like
</div>
</div>

<ul class="social-icons">
      <li><Link href="#"><i class="fab fa-facebook"></i></Link></li>
      <li><Link href="#"><i class="fab fa-github"></i></Link></li>
      <li><Link href="#"><i class="fab fa-linkedin"></i></Link></li>
      <li><Link href="#"><i class="fab fa-codepen"></i></Link></li>
    </ul>
  <h4>  Contact:  muhsin22@gmail.com </h4>
    <button class="btn1 draw-border">Follow</button>
    <button class="btn1 draw-border">Message</button>

            </div>



            <div className='card col-md-6'>
<img
className="card__image"
src="https://avatars.githubusercontent.com/u/86657054?v=4" alt="" />
<p class="card__name"> Ifzal  Devolaper</p>
<div className='grid-container'>
<div className='grid-child-posts'>
156 Post
</div>
<div className='grid-child-followers'>
100Like
</div>
</div>

<ul class="social-icons">
      <li><Link href="#"><i class="fab fa-instagram"></i></Link></li>
      <li><Link href="#"><i class="fab fa-twitter"></i></Link></li>
      <li><Link href="#"><i class="fab fa-linkedin"></i></Link></li>
      <li><Link href="#"><i class="fab fa-codepen"></i></Link></li>
    </ul>
<h4>    Contact:  enjoyyourlife2244@gmail.com</h4>
    <button class="btn1 draw-border">Follow</button>
    <button class="btn1 draw-border">Message</button>

            </div>
           
        </div>
        </>
    );
};

export default About;