const PP_ACCORDION = {

   init: function() {
      this.expandToggle();
   },
   expandToggle: function() {
      var accordions =document.querySelectorAll('.accordion-wrapper');

      accordions.forEach(acc => {
         var aTitle = acc.querySelector('.accordion-title');
         aTitle.addEventListener('click', function() {
            acc.classList.toggle('active');
         })
      })
   }
};



export default PP_ACCORDION;