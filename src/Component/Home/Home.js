import React from 'react';
import ClienteReview from '../ClienteReview/ClienteReview';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import FutureCar from '../FutureCare/FutureCar';
import Header from '../Header/Header';
import OurService from '../OurService/OurService';
import Banner from './Banner/Banner';
import HotCar from './HotCar/HotCar';
import IconeContainer from './IconContainer/IconeContainer';
import Subcribe from './Subcribe/Subcribe';



const Home = () => {
    return (
        <div>
       <Header></Header>     
            <Banner></Banner>
       <IconeContainer></IconeContainer>
       <HotCar></HotCar>
       <OurService></OurService>
       <FutureCar></FutureCar>
       <Subcribe></Subcribe>
       <ClienteReview></ClienteReview>
       <Contact></Contact>
       <Footer></Footer>
        </div>
    );
};

export default Home;