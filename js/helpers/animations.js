const animations = {};

animations.init = () => {

  let observerOptions = {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0
  }

  let observer = new IntersectionObserver(observerCallback, observerOptions);

  function observerCallback(entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('seen');
            observer.unobserve(entry.target);
          }
      });
  }

  document.querySelectorAll('.anim').forEach((i) => {
      if (i) {
          observer.observe(i);
      }
  });

};

export default animations;