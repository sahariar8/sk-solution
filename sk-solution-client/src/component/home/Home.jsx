import React from 'react';
import Slider from './Slider';
import Stepper from './Stepper';
import Brand from './Brand';
import Services from './Services';
import Gallery from './Gallery';
import Staff from './Staff';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Brand></Brand>
           <Stepper></Stepper>
          <Services></Services>
          <Gallery></Gallery>
          <Staff></Staff>
        </div>
    );
};

export default Home;