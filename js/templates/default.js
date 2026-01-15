// import GLightbox from "glightbox";
// import { CountUp } from 'countup.js';
// import { tns } from 'tiny-slider';

const DEFAULT = {

  init: function() {
   //  this.countUpInit();
   //  this.glightboxInit();
   this.heroHover();
  },

  heroHover: function() {

   var defaultHeroIMG = document.querySelector('.default-hero .hero-image')

   if (defaultHeroIMG) {
      const wrapper = document.querySelector('.default-hero .hero-image');
      const img = wrapper.querySelector('img');

      const MAX_ROTATION = 15;
      const MAX_SHADOW = 40; // px

      wrapper.addEventListener('mousemove', e => {
      const rect = wrapper.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      const rotateY = percentX * MAX_ROTATION;
      const rotateX = -percentY * MAX_ROTATION;

      // Shadow moves opposite of tilt
      const shadowX = -percentX * MAX_SHADOW;
      const shadowY = percentY * MAX_SHADOW;

      img.style.transform = `
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
      `;

      img.style.boxShadow = `
         ${shadowX}px ${shadowY}px 60px rgba(0, 0, 0, 0.35)
      `;
      });

      wrapper.addEventListener('mouseleave', () => {
         img.style.transform = 'rotateX(0deg) rotateY(0deg)';
         img.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0)';
      });

      
   }
 


   
  }
}

export default DEFAULT;