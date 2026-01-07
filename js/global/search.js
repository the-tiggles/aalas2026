const SEARCH = {
  init: function() {
    this.handleSearchToggle();
  },

  // toggle search
  handleSearchToggle: function() {
    const activeModifier = '--active';
    const panelClass = 'search-panel';
    const triggerClass = 'search-trigger';
    const dismissClass = 'search-panel__dismiss'
    const inputClass = 'search-panel__input';
  
    const panel = document.querySelector(`.${panelClass}`);
    const trigger = document.querySelector(`.${triggerClass}`);
    const dismiss = document.querySelector(`.${dismissClass}`);
    const input = document.querySelector(`.${inputClass}`);
  
    function openSearch() {
      panel.classList.add(`${panelClass}${activeModifier}`);
      trigger.classList.add(`${triggerClass}${activeModifier}`);
      input.focus();
    }
  
    function closeSearch() {
      panel.classList.remove(`${panelClass}${activeModifier}`);
      trigger.classList.remove(`${triggerClass}${activeModifier}`);
    }
  
    function onClick() {
      (trigger.classList.contains(`${triggerClass}${activeModifier}`))
        ? closeSearch()
        : openSearch();
    }
  
    if (panel && trigger) {
      trigger.addEventListener('click', onClick);
    }

    if (dismiss) {
      dismiss.addEventListener('click', closeSearch);
    }
  }

}

export default SEARCH;