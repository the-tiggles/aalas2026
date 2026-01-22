import { CountUp } from 'countup.js';

const HELPER = {
   init: function () {
      this.lazyIMGs();
      this.embedResponsively();
      this.promoArea();
      this.ppQuote();
      this.ppPromoAreaStats();
   },
   lazyIMGs: function () {

      function isOnScreen(el) {
         const rect = el.getBoundingClientRect();
         const viewHeight = window.innerHeight || document.documentElement.clientHeight;
         return !(rect.bottom < 0 || rect.top > viewHeight);
      }

      function toggleClass() {

         document.querySelectorAll('.animate-in').forEach(el => {
            if (isOnScreen(el)) el.classList.add('inview');
         });

         document.querySelectorAll('.animate-in-out').forEach(el => {
            el.classList.toggle('inview', isOnScreen(el));
         });

         document.querySelectorAll('.lazyimg').forEach(el => {
            if (isOnScreen(el) && !el.classList.contains('inview')) {
            const src = el.dataset.src;
            if (src) {
               el.src = src;
               el.classList.add('inview');
            }
            }
         });

         document.querySelectorAll('.lazybg').forEach(el => {
            if (isOnScreen(el) && !el.classList.contains('inview')) {
            const src = el.dataset.src;
            if (src) {
               el.style.backgroundImage = `url('${src}')`;
               el.classList.add('inview');
            }
            }
         });
      }

      ['scroll', 'resize', 'load'].forEach(evt =>
         window.addEventListener(evt, toggleClass)
      );

      // 👇 force initial run
      toggleClass();
   },

   embedResponsively: function() {
      document.querySelectorAll('iframe').forEach(iframe => {
         // Skip if already wrapped
         if (iframe.parentElement.classList.contains('embed-container')) return;

         const wrapper = document.createElement('div');
         wrapper.className = 'embed-container';

         // Insert wrapper before iframe
         iframe.parentNode.insertBefore(wrapper, iframe);

         // Move iframe inside wrapper
         wrapper.appendChild(iframe);
      });

   },
   promoArea: function() {
      (() => {
         if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

         const elements = document.querySelectorAll('.parallax-bg');
         if (!elements.length) return;

         const state = new Map();
         let ticking = false;

         // TUNABLE VALUES
         const PARALLAX_PX = 45;
         const SCALE_MAX = 1.15;
         const BLUR_MAX = 10; // blur increases downward

         const update = () => {
            state.forEach((data, el) => {
               if (!data.inView) return;

               const rect = el.getBoundingClientRect();
               const viewportHeight = window.innerHeight;

               // Progress increases as user scrolls DOWN
               const progress =
               (viewportHeight - rect.top) / (viewportHeight + rect.height);

               const clamped = Math.max(0, Math.min(1, progress));

               // Ease
               const eased = clamped * clamped;

               // Effects
               const bgOffset = eased * PARALLAX_PX;
               const scale = 1 + eased * (SCALE_MAX - 1);
               const blur = eased * BLUR_MAX;

               el.style.backgroundPosition = `center calc(50% + ${bgOffset}px)`;
               el.style.transform = `scale(${scale})`;
               el.style.filter = `blur(${blur}px)`;
            });

            ticking = false;
         };

         const onScroll = () => {
            if (!ticking) {
               requestAnimationFrame(update);
               ticking = true;
            }
         };

         const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
               const el = entry.target;
               const data = state.get(el);
               if (!data) return;

               data.inView = entry.isIntersecting;

               if (!entry.isIntersecting) {
               el.style.backgroundPosition = 'center 50%';
               el.style.transform = 'scale(1)';
               el.style.filter = 'blur(0px)';
               }
            });
         });

         elements.forEach(el => {
            state.set(el, { inView: false });
            observer.observe(el);
         });

         window.addEventListener('scroll', onScroll, { passive: true });
      })();


   },
   ppQuote: function() {
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
                     "color": "#fff",
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
                     "speed": 0.4051305735838664,
                     "opacity_min": 0.2241044588670931,
                     "sync": false
                  }
               },
               "size": {
                  "value": 25,
                  "random": true,
                  "anim": {
                     "enable": false,
                     "speed": 40,
                     "size_min": 0.1,
                     "sync": false
                  }
               },
               "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#fff",
                  "opacity": 0.3,
                  "width": 2
               },
               "move": {
                  "enable": true,
                  "speed": .4,
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

   ppPromoAreaStats: function() {

      // stats section
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

      // bg 

      
   }

}

export default HELPER;