const HELPER = {
   init: function () {
      this.lazyIMGs();
      this.embedResponsively();
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

   }

}

export default HELPER;