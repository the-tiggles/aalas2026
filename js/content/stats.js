import { CountUp } from 'countup.js';

const STATS = {};

STATS.init = () => {
  const stats = document.querySelectorAll('.stats__value');
  const statValues = [];
  const countUps = [];

  // Collect stat values
  stats.forEach(function(stat) {
      statValues.push(stat.id);
  });

  // CountUp setup for each stat
  for (let i = 0; i < statValues.length; i++) {
      let decimals = (statValues[i].toString().split('.').length > 1)
          ? statValues[i].toString().split('.')[1]
          : 0;

      countUps[i] = new CountUp(
          statValues[i].toString(),
          parseFloat(statValues[i]),
          {
            decimalPlaces: decimals,
            duration: 3,
            separator: '',
            useGrouping: false
          }
      );
  }

  // Run CountUps when in view
  let observerOptions = {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
  }

  let observer = new IntersectionObserver(observerCallback, observerOptions);

  function observerCallback(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            for (let i = 0; i < countUps.length; i++) {
              countUps[i].start();
            }
            observer.unobserve(entry.target);
          }
      });
  }

  let target = '.stats';

  document.querySelectorAll(target).forEach((i) => {
      if (i) {
          observer.observe(i);
      }
  });

}

export default STATS;