const SIDENAV = {
  init: function() {
    this.toggleSecondaryNavExpands();
  },

  // toggle expand buttons
  toggleSecondaryNavExpands: function() {
    const activeClass = 'active';
    const activeModifier = '--active';
    const expandClass = 'menu__expand';

    const expands = document.querySelectorAll(`.side-nav .${expandClass}`);

    function collapseMenu(expand, panel) {
      expand.classList.remove(`${expandClass}${activeModifier}`);
      panel.style.height = panel.offsetHeight + 'px';
      setTimeout(() => { panel.style.height = '0px' }, 0);
      let transitionDuration = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration-m').replace('s', '');
      transitionDuration = parseFloat(transitionDuration) * 1000;
      setTimeout(() => {
        panel.classList.remove(`${activeClass}`);  
      }, transitionDuration);
    }

    function expandMenu(expand, panel) {
      expand.classList.add(`${expandClass}${activeModifier}`);
      panel.classList.add(`${activeClass}`);
      panel.style.height = 'auto';
      let panelHeight = panel.offsetHeight + 'px';
      panel.style.height = '0px';
      setTimeout(() => { panel.style.height = panelHeight }, 0);
      let transitionDuration = getComputedStyle(document.documentElement).getPropertyValue('--transition-duration-m').replace('s', '');
      transitionDuration = parseFloat(transitionDuration) * 1000;
      setTimeout(() => { panel.style.height = 'auto' }, transitionDuration);
    }

    function onClick() {
      const expand = this;
      const panel = expand.parentNode.querySelector('ul');
      (expand.classList.contains(`${expandClass}${activeModifier}`))
        ? collapseMenu(expand, panel)
        : expandMenu(expand, panel);
    }

    if (expands.length) {
      expands.forEach(function (expand) {
        expand.addEventListener('click', onClick);
      });
    }
  }

}

export default SIDENAV;