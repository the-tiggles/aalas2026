const ACCORDION = {};

ACCORDION.init = () => {
  const activeModifier = '--active';
  const triggerClass = 'accordion__title';
  const panelClass = 'accordion__panel';
  const innerPanelClass = 'accordion__panel-inner';
  
  const triggers = document.querySelectorAll(`.${triggerClass}`);
  
  function expandToggle(panel, trigger) {
    trigger.classList.add(`${triggerClass}${activeModifier}`);
    panel.classList.add(`${panelClass}${activeModifier}`);
    panel.style.height = panel.querySelector(`.${innerPanelClass}`).offsetHeight + 'px';
  }

  function collapseToggle(panel, trigger) {
    trigger.classList.remove(`${triggerClass}${activeModifier}`);
    panel.classList.remove(`${panelClass}${activeModifier}`);
    panel.style.height = 0;
  }

  function onClick() {
    const trigger = this;
    const panel = trigger.nextElementSibling;
    if (panel) {
      if (panel && trigger) {
        trigger.classList.contains(`${triggerClass}${activeModifier}`)
          ? collapseToggle(panel, trigger)
          : expandToggle(panel, trigger);
      }
    }
  }

  if (triggers.length) {
    triggers.forEach(function(toggleTrigger) {
      toggleTrigger.addEventListener('click', onClick);
    });
  }
}

export default ACCORDION;