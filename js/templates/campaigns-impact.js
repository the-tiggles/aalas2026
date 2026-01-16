import { CountUp } from 'countup.js';

const CAMPAIGNS_IMPACT = {

  init() {
    this.statsCountup();
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
  }
};

export default CAMPAIGNS_IMPACT;
