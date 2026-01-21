const SIDECAR = {
  init: function() {
    this.toggleSidecar();
    this.toggleSidecarExpands();
  },
    
  // toggle sidecar
  toggleSidecar: function() {
    const activeModifier = '--active';
    const panelClass = 'sidecar';
    const triggerClass = 'hamburger';

    const panel = document.querySelector(`.${panelClass}`);
    const trigger = document.querySelector(`.${triggerClass}`);

    function openPanel() {
      panel.classList.add(`${panelClass}${activeModifier}`);
      trigger.classList.add(`${triggerClass}${activeModifier}`);
    }

    function closePanel() {
      panel.classList.remove(`${panelClass}${activeModifier}`);
      trigger.classList.remove(`${triggerClass}${activeModifier}`);
    }

    function onClick() {
      (trigger.classList.contains(`${triggerClass}${activeModifier}`))
        ? closePanel()
        : openPanel();
    }

    if (panel && trigger) {
      trigger.addEventListener('click', onClick);
    }
  },

  // toggle expand buttons
  toggleSidecarExpands: function() {
    var btnExpand = document.querySelectorAll('#sidecar-nav .btn-expand');

    btnExpand.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        // toggle active class on sibling element
        this.parentElement.classList.toggle('active');
      });
    });
  }
}

export default SIDECAR;