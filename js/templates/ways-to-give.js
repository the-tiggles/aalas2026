import { CountUp } from 'countup.js';

const CAMPAIGNS_IMPACT = {

   init() {
      this.statsCountup();
      this.barAnimate();
   },

   statsCountup() {
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
   },
   barAnimate() {
      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach(entry => {
               if (!entry.isIntersecting) return;

               if (entry.target.id === 'bar-horizontal') {
                  document.getElementById('fill-horizontal').beginElement();

                  setTimeout(() => {
                     document.getElementById('wave-horizontal').beginElement();
                  }, 1200);
               }

               if (entry.target.id === 'bar-vertical') {
                  document.getElementById('fill-vertical').beginElement();

                  setTimeout(() => {
                     document.getElementById('wave-vertical').beginElement();
                  }, 1200);
               }

               observer.unobserve(entry.target); // play once
            });
         },
         { threshold: 0.4 }
      );

      document.querySelectorAll('.bar-svg').forEach(svg => {
         observer.observe(svg);
      });
   }
};

export default CAMPAIGNS_IMPACT;
