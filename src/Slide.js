// import React from 'react';
// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
//  import React from 'react'

//  export default function Slide() {
//      return (
//          <div>

//          </div>
//      )
//  }

// const slideImages = [
//   'images/slide_2.jpg',
//   'images/slide_3.jpg',
//   'images/slide_4.jpg'
// ];

// const Slide = () => {
//     return (
//       <div className="slide-container">
//         <Slide>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
//               <span>Slide 1</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
//               <span>Slide 2</span>
//             </div>
//           </div>
//           <div className="each-slide">
//             <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
//               <span>Slide 3</span>
//             </div>
//           </div>
//         </Slide>
//       </div>
//     )
// }
// // import React from 'react';
// // import './Slide.css';
// // import logo from './images/v1.jpg';

// // export default function Slide() {
// //   var slideIndex = 1;
// //   showSlides(slideIndex);

// //   function plusSlides(n) {
// //     showSlides((slideIndex += n));
// //   }

// //   function currentSlide(n) {
// //     showSlides((slideIndex = n));
// //   }

// //   function showSlides(n) {
// //     var i;
// //     var slides = document.getElementsByClassName('mySlides');
// //     var dots = document.getElementsByClassName('demo');
// //     var captionText = document.getElementById('caption');
// //     if (n > slides.length) {
// //       slideIndex = 1;
// //     }
// //     if (n < 1) {
// //       slideIndex = slides.length;
// //     }
// //     for (i = 0; i < slides.length; i++) {
// //       slides[i].style.display = 'none';
// //     }
// //     for (i = 0; i < dots.length; i++) {
// //       dots[i].className = dots[i].className.replace(' active', '');
// //     }
// //     // slides[slideIndex - 1].style.display = 'block';
// //     // dots[slideIndex - 1].className += ' active';
// //     //captionText.innerHTML = dots[slideIndex - 1].alt;
// //   }
// //   return (
// //     <div>
// //       {' '}
// //       <h2>Slideshow Gallery</h2>
// //       <div class='container'>
// //         <div class='mySlides'>
// //           <div class='numbertext'>1 / 6</div>
// //           <img src='images/v1.jpg' alt='' width='350' height='250' />
// //         </div>

// //         <div class='mySlides'>
// //           <div class='numbertext'>2 / 6</div>
// //           <img src='images/v2.jpg' alt='' width='350' height='250' />
// //         </div>

// //         <div class='mySlides'>
// //           <div class='numbertext'>3 / 6</div>
// //           <img src='images/v3.jpg' alt='' width='350' height='250' />
// //         </div>

// //         <div class='mySlides'>
// //           <div class='numbertext'>4 / 6</div>
// //           <img src='images/v4.jpg' alt='' width='350' height='250' />
// //         </div>

// //         <div class='mySlides'>
// //           <div class='numbertext'>5 / 6</div>
// //           <img src='images/v5.jpg' alt='' width='350' height='250' />
// //         </div>

// //         <div class='mySlides'>
// //           <div class='numbertext'>6 / 6</div>
// //           <img src='images/v6.jpg' alt='' width='350' height='250' />
// //         </div>

// //         <a class='prev' onClick={plusSlides(-1)} href='f'>
// //           ❮
// //         </a>
// //         <a class='next' onClick={plusSlides(1)} href='g'>
// //           ❯
// //         </a>

// //         <div class='caption-container'>
// //           <p id='caption'></p>
// //         </div>

// //         <div class='row'>
// //           <div class='column'>
// //             <img
// //               class='demo cursor'
// //               src={logo}
// //               width='350'
// //               height='250'
// //               onClick={currentSlide(1)}
// //               alt='The Woods'
// //             />
// //           </div>
// //           <div class='column'>
// //             <img
// //               class='demo cursor'
// //               src='images/v2.jpg'
// //               width='350'
// //               height='250'
// //               onClick={currentSlide(2)}
// //               alt='Cinque Terre'
// //             />
// //           </div>
// //           <div class='column'>
// //             <img
// //               class='demo cursor'
// //               src='images/v3.jpg'
// //               width='350'
// //               height='250'
// //               onClick={currentSlide(3)}
// //               alt='Mountains and fjords'
// //             />
// //           </div>
// //           <div class='column'>
// //             <img
// //               class='demo cursor'
// //               src='images/v4.jpg'
// //               width='350'
// //               height='250'
// //               onClick={currentSlide(4)}
// //               alt='Northern Lights'
// //             />
// //           </div>
// //           <div class='column'>
// //             <img
// //               class='demo cursor'
// //               src='images/v5.jpg'
// //               width='350'
// //               height='250'
// //               onClick={currentSlide(5)}
// //               alt='Nature and sunrise'
// //             />
// //           </div>
// //           <div class='column'>
// //             <img
// //               class='demo cursor'
// //               src='images/v6.jpg'
// //               style={{ width: '100px' }}
// //               onClick={currentSlide(6)}
// //               alt='Snowy Mountains'
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
