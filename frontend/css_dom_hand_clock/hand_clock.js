class HandClock extends HTMLElement {
  constructor() {
    super();

    // Create shadow DOM and clock elements
    const shadow = this.attachShadow({mode: 'open'});
    const clockFace = document.createElement('div');
    const hourHand = document.createElement('div');
    const minuteHand = document.createElement('div');
    const secondHand = document.createElement('div');
    const style = document.createElement('style');
    const size = this.getAttribute('size');
  }
}