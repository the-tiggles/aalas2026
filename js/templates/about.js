const ABOUT = {

   init: function () {
      this.particlesBG();
   },

   particlesBG: function () {


      particlesJS('particles-js',

         {
            "particles": {
               "number": {
                  "value": 96,
                  "density": {
                     "enable": true,
                     "value_area": 560
                  }
               },
               "color": {
                  "value": "#007886"
               },
               "shape": {
                  "type": "circle",
                  "stroke": {
                     "width": 0,
                     "color": "#007886",
                  },
                  "polygon": {
                     "nb_sides": 4
                  },
                  "image": {
                     "src": "img/github.svg",
                     "width": 100,
                     "height": 100
                  }
               },
               "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                     "enable": false,
                     "speed": 0.4051305735838664,
                     "opacity_min": 0.2241044588670931,
                     "sync": false
                  }
               },
               "size": {
                  "value": 25,
                  "random": true,
                  "anim": {
                     "enable": false,
                     "speed": 40,
                     "size_min": 0.1,
                     "sync": false
                  }
               },
               "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#007886",
                  "opacity": 0.7,
                  "width": 2
               },
               "move": {
                  "enable": true,
                  "speed": .4,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                     "enable": false,
                     "rotateX": 600,
                     "rotateY": 709.5329696319886
                  }
               }
            },
            "interactivity": {
               "detect_on": "window",
               "events": {
                  "onhover": {
                     "enable": true,
                     "mode": "repulse"
                  },
                  "onclick": {
                     "enable": true,
                     "mode": "push"
                  },
                  "resize": true
               },
               "modes": {
                  "grab": {
                     "distance": 400,
                     "line_linked": {
                        "opacity": .4
                     }
                  },
                  "bubble": {
                     "distance": 400,
                     "size": 40,
                     "duration": 2,
                     "opacity": 2,
                     "speed": 3
                  },
                  "repulse": {
                     "distance": 81.02611471677328,
                     "duration": 0.4
                  },
                  "push": {
                     "particles_nb": 4
                  },
                  "remove": {
                     "particles_nb": 2
                  }
               }
            },
            "retina_detect": true
         }

      );



   }
}

export default ABOUT;