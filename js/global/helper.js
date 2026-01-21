const HELPER = {
   init: function () {
      this.lazyIMGs();
      this.embedResponsively();
      this.promoArea();
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


   }

}

export default HELPER;