const HEADER = {
  init: function() {
    this.scrollHeader();
  },

  // toggle search
  scrollHeader: function() {
   var nav = document.querySelector('.scroll-header');
   var scrollUp = "header-show";
   var scrollDown = "header-hide";
   let lastScroll = 0;
   window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
         nav.classList.remove(scrollUp);
         return;
      }
      if (
         currentScroll > lastScroll && 
         !nav.classList.contains(scrollDown) &&
         !document.getElementById('sidecar').classList.contains('active')
      ) {
         // down
         nav.classList.remove(scrollUp);
         nav.classList.add(scrollDown);
      } else if (
         currentScroll < lastScroll &&
         nav.classList.contains(scrollDown)
      ) {
         // up
         nav.classList.remove(scrollDown);
         nav.classList.add(scrollUp);
         
      }
      lastScroll = currentScroll;
   });

  }

}

export default HEADER;