/*
 * Import Modules
 */

import docReady from './helpers/doc-ready.js';
import animations from './helpers/animations.js';

// Global Components
import SEARCH from "./global/search.js";
import SIDECAR from "./global/sidecar.js";
import SIDENAV from "./global/sidenav.js";

// Content Components
import ACCORDION from "./content/accordion.js";
import DISCOVERIES from './content/discoveries.js';
import GALLERY from "./content/gallery.js";
import PORTALS from "./content/portals.js";
import RECENT_POSTS from "./content/recent-posts.js";
import STATS from "./content/stats.js";

// Templates
import HOME from "./templates/home.js";
// import DEFAULT from "./templates/default.js";


/*
 * Initialize Modules
 */

// docReady.init(() => {
//     animations.init();

//     SEARCH.init();
//     SIDECAR.init();
//     SIDENAV.init();

//     if (document.querySelectorAll('.accordion').length) { ACCORDION.init(); }
//     if (document.querySelectorAll('.discoveries').length) { DISCOVERIES.init(); }
//     if (document.querySelectorAll('.gallery').length) { GALLERY.init(); }
//     if (document.querySelectorAll('.portals').length) { PORTALS.init(); }
//     if (document.querySelectorAll('.recent-posts').length) { RECENT_POSTS.init(); }
//     if (document.querySelectorAll('.stats').length) { STATS.init(); }

//     if (document.getElementsByTagName('body')[0].classList.contains('home')) { HOME.init(); }
//     // if (document.getElementsByTagName('body')[0].classList.contains('default')) { DEFAULT.init(); }
// });

function initScripts() {
    animations.init();

    SEARCH.init();
    SIDECAR.init();
    SIDENAV.init();

    if (document.querySelectorAll('.accordion').length) { ACCORDION.init(); }
    if (document.querySelectorAll('.discoveries').length) { DISCOVERIES.init(); }
    if (document.querySelectorAll('.gallery').length) { GALLERY.init(); }
    if (document.querySelectorAll('.portals').length) { PORTALS.init(); }
    if (document.querySelectorAll('.recent-posts').length) { RECENT_POSTS.init(); }
    if (document.querySelectorAll('.stats').length) { STATS.init(); }

    if (document.getElementsByTagName('body')[0].classList.contains('home')) { HOME.init(); }
    // if (document.getElementsByTagName('body')[0].classList.contains('default')) { DEFAULT.init(); }
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