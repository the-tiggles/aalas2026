// import GLightbox from "glightbox";
// import { CountUp } from 'countup.js';
import { tns } from 'tiny-slider';

const HOME = {

  init: function() {
   //  this.countUpInit();
   //  this.glightboxInit();
   this.programsInitiativesSlider();
  },

  programsInitiativesSlider: function() {
   let progSlider = document.querySelector('ul.programs-initiatives-list');

   if (progSlider) {
      var slider = tns({
         container: progSlider,
         items: 1,
         slideBy: 'page',
         controls: true,
         nav: true,
         loop: false,
         rewind: true,
         controlsPosition: 'bottom',
         navPosition: 'bottom',
         responsive: {
            768: {
               disable: true,
            }
         }
      })
   }
  }
}

export default HOME;