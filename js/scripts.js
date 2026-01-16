/*
 * Import Modules
 */

import docReady from './helpers/doc-ready.js';
import animations from './helpers/animations.js';

// Global Components
import HELPER from "./global/helper.js";
import HEADER from "./global/header.js";
import SEARCH from "./global/search.js";
import SIDECAR from "./global/sidecar.js";
import SIDENAV from "./global/sidenav.js";

// Content Components
import ACCORDION from "./content/accordion.js";
import PP_ACCORDION from './content/pp-accordion.js';
import PROG_OUTREACH_SLIDER from './content/prog-outreach-slider.js';
import STATS from "./content/stats.js";

// Templates
import HOME from "./templates/home.js";
import DEFAULT from "./templates/default.js";
import VOLUNTEER from "./templates/volunteer.js";
import ABOUT from "./templates/about.js";
import CAMPAIGNS_IMPACT from "./templates/campaigns-impact.js";
// import DEFAULT from "./templates/default.js";


/*
 * Initialize Modules
 */


function initScripts() {
    animations.init();

    HELPER.init();
    HEADER.init();
    SEARCH.init();
    SIDECAR.init();
    SIDENAV.init();

    if (document.querySelectorAll('.accordion').length) { ACCORDION.init(); }
    if (document.querySelectorAll('.pp-accordion').length) { PP_ACCORDION.init(); }
    if (document.querySelectorAll('.pp-programs-outreach-cards').length) { PROG_OUTREACH_SLIDER.init(); }
    if (document.querySelectorAll('.stats').length) { STATS.init(); }
    if (document.querySelectorAll('body.volunteer').length) { VOLUNTEER.init(); }
    if (document.querySelectorAll('body.about').length) { ABOUT.init();}

    if (document.getElementsByTagName('body')[0].classList.contains('home')) { HOME.init(); }
    if (document.getElementsByTagName('body')[0].classList.contains('default')) { DEFAULT.init(); }
    if (document.getElementsByTagName('body')[0].classList.contains('campaigns-impact')) { CAMPAIGNS_IMPACT.init(); }
}

docReady.init(() => {

    // replace include tags with the contents of the files from their src attributes
    const includes = document.querySelectorAll('include');

    let processedIncludes = 0;

    includes.forEach(i => {
        let filePath = i.getAttribute('src');
        fetch(filePath).then(file => {
            file.text().then(content => {
                i.insertAdjacentHTML('afterend', content);
                i.remove();

                processedIncludes++;

                // init all scripts when every include has finished loading
                if (processedIncludes == includes.length) {
                    initScripts();
                }
            });
        });
    });

});