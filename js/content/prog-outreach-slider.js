import { tns } from 'tiny-slider';

const PROG_OUTREACH_SLIDER = {};

PROG_OUTREACH_SLIDER.init = () => {
  var theSlider = document.querySelector('ul.programs-outreach-list');

  if (theSlider) {
    var slider = tns({
      container: theSlider,
      items: 1,
      slideBy: 'page',
      controls: true,
      nav: true,
      loop: false,
      rewind: true,
      controlsPosition: 'bottom',
      navPosition: 'bottom',
      responsive: {
        768: {
          disable: true,
        }
      }
    })
  }
}

export default PROG_OUTREACH_SLIDER;