const HELPER = {
   init: function () {
      this.lazyIMGs();
      this.embedResponsively();
   },
   lazyIMGs: function () {
      if (
         document.querySelector('.animate-in') ||
         document.querySelector('.animate-in-out') ||
         document.querySelector('.lazybg') ||
         document.querySelector('.lazyimg')
      ) {
         let winScrollTop = 0;

         function isOnScreen(el) {
            const rect = el.getBoundingClientRect();
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            return !(rect.bottom < 0 || rect.top > viewHeight);
         }

         function toggleClass() {
            document.querySelectorAll('.animate-in').forEach(el => {
               if (isOnScreen(el)) {
                  el.classList.add('inview');
               }
            });

            document.querySelectorAll('.animate-in-out').forEach(el => {
               if (isOnScreen(el)) {
                  el.classList.add('inview');
               } else {
                  el.classList.remove('inview');
               }
            });

            document.querySelectorAll('.lazyimg').forEach(el => {
               if (isOnScreen(el) && !el.classList.contains('in-view')) {
                  const theIMG = el.getAttribute('data-src');
                  if (theIMG) {
                     el.setAttribute('src', theIMG);
                     el.classList.add('inview');
                  }
               }
            });

            document.querySelectorAll('.lazybg').forEach(el => {
               if (isOnScreen(el) && !el.classList.contains('in-view')) {
                  const theIMG = el.getAttribute('data-src');
                  if (theIMG) {
                     el.style.backgroundImage = `url('${theIMG}')`;
                     el.classList.add('inview');
                  }
               }
            });
         }

         ['scroll', 'resize', 'load'].forEach(evt =>
            window.addEventListener(evt, () => {
               winScrollTop = window.scrollY;
               toggleClass();
            })
         );
      }

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