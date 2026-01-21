// import GLightbox from "glightbox";
import { CountUp } from 'countup.js';
import { tns } from 'tiny-slider';

const HOME = {

  init: function() {
   //  this.countUpInit();
   //  this.glightboxInit();
   this.programsInitiativesSlider();
   this.researchStatsBG();
   this.researchStatsSlider();
   this.researchStatsCountUp();
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
  },
  researchStatsBG: function() {

      particlesJS('particles-js',

         {
            "particles": {
               "number": {
                  "value": 96,
                  "density": {
                     "enable": true,
                     "value_area": 560
                  }
               },
               "color": {
                  "value": "#fff"
               },
               "shape": {
                  "type": "circle",
                  "stroke": {
                     "width": 0,
                     "color": "#007886",
                  },
                  "polygon": {
                     "nb_sides": 4
                  },
                  "image": {
                     "src": "img/github.svg",
                     "width": 100,
                     "height": 100
                  }
               },
               "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                     "enable": false,
                     "speed": 0.3051305735838664,
                     "opacity_min": 0.2241044588670931,
                     "sync": false
                  }
               },
               "size": {
                  "value": 20,
                  "random": true,
                  "anim": {
                     "enable": true,
                     "speed": 5,
                     "size_min": 0.1,
                     "sync": false
                  }
               },
               "line_linked": {
                  "enable": true,
                  "distance": 100,
                  "color": "#fff",
                  "opacity": 0.7,
                  "width": 2
               },
               "move": {
                  "enable": true,
                  "speed": .3,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                     "enable": false,
                     "rotateX": 600,
                     "rotateY": 709.5329696319886
                  }
               }
            },
            "interactivity": {
               "detect_on": "canvas",
               "events": {
                  "onhover": {
                     "enable": false,
                     "mode": "repulse"
                  },
                  "onclick": {
                     "enable": false,
                     "mode": "push"
                  },
                  "resize": true
               },
               "modes": {
                  "grab": {
                     "distance": 400,
                     "line_linked": {
                        "opacity": .4
                     }
                  },
                  "bubble": {
                     "distance": 400,
                     "size": 40,
                     "duration": 2,
                     "opacity": 2,
                     "speed": 3
                  },
                  "repulse": {
                     "distance": 81.02611471677328,
                     "duration": 0.4
                  },
                  "push": {
                     "particles_nb": 4
                  },
                  "remove": {
                     "particles_nb": 2
                  }
               }
            },
            "retina_detect": true
         }

      );
  },
  researchStatsSlider: function() {
   var statsSlider = document.querySelector('.research-stats ul.cards-list');

   if (statsSlider) {
      var slider = tns({
         container: statsSlider,
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
  },
  researchStatsCountUp: function() {
         const stats = document.querySelectorAll('.stat-number');
   
         const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
               const el = entry.target;
               const countUp = el._countUp;
   
               if (entry.isIntersecting) {
                  if (!countUp.error && !countUp.isRunning) {
                     countUp.start();
                  }
               } else {
                  // 👇 reset when out of view
                  countUp.reset();
               }
            });
         }, {
            rootMargin: '0px 0px 0px 0px',
            threshold: 0
         });
   
         stats.forEach(el => {
            const start = parseFloat(el.dataset.statStart) || 0;
            const end = parseFloat(el.dataset.statEnd) || 0;
            const decimals = (end.toString().split('.')[1] || '').length;
   
            el._countUp = new CountUp(el, end, {
               startVal: start,
               decimalPlaces: decimals,
               duration: 3,
               useGrouping: true,
            });
   
            observer.observe(el);
         });
  }
}

export default HOME;