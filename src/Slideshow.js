import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import logo1 from './images/v1.jpg';
import logo2 from './images/v2.jpg';
import logo3 from './images/v3.jpg';
import logo4 from './images/v4.jpg';
import logo5 from './images/v5.jpg';
import logo6 from './images/v6.jpg';
const slideImages = [
  'images/v1.jpg',
  'images/v2.jpg',
  'images/v3.jpg',
  'images/v4.jpg',
  'images/v5.jpg',
  'images/v6.jpg',
];

const Slideshow = () => {
  return (
    <div className='slide-container'>
      <Slide>
        <div className='each-slide'>
          <div>
            <img src={logo1} alt='' width='400' height='250' />
          </div>
        </div>
        <div className='each-slide'>
          <div>
            <img src={logo2} alt='' width='400' height='250' />
          </div>
        </div>
        <div className='each-slide'>
          <div>
            <img src={logo3} alt='' width='400' height='250' />
          </div>
        </div>
        <div className='each-slide'>
          <div>
            <img src={logo5} alt='' width='400' height='250' />
          </div>
        </div>
        <div className='each-slide'>
          <div>
            <img src={logo4} alt='' width='400' height='250' />
          </div>
        </div>
        <div className='each-slide'>
          <div>
            <img src={logo6} alt='' width='400' height='250' />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
