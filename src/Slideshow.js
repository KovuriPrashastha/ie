import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Paper } from '@material-ui/core';
import 'react-slideshow-image/dist/styles.css';
import logo1 from './images/v1.jpg';
import logo2 from './images/v2.jpg';
import logo3 from './images/v3.jpg';
import logo4 from './images/v4.jpg';
import logo5 from './images/v5.jpg';
import logo6 from './images/v6.jpg';

const Slideshow = () => {
  return (
    <div>
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
      <div style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
        <Paper>
          <u>
            <h3 style={{ color: '#3f51b5' }}>Our Vision</h3>
          </u>
          <h4>
            "Striving for a symbiosis of technological excellence and human
            <br />
            values."
          </h4>
        </Paper>
        <Paper>
          <u>
            <h3 style={{ color: '#3f51b5' }}>Our Mission</h3>
          </u>
          <h4>
            "To arm young brains with competitive technology and nurture
            <br />
            holistic development of the individuals for a better tomorrow."
          </h4>
        </Paper>
      </div>
      <div></div>
    </div>
  );
};
export default Slideshow;
