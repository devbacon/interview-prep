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

    clockFace.setAttribute('class', 'clock-face');
    hourHand.setAttribute('class', 'hour hand');
    minuteHand.setAttribute('class', 'minute hand');
    secondHand.setAttribute('class', 'second hand');

    /*
      Display clock face using flex to easily center hands.
      Stack hands using absolute and rotate them all to an upright position.
      Use ::after element selector on each hand to create their visual components.
      This allows the base element to be the center of rotation.
      Specify a height and width for all hands based on size attribute.
    */
    style.textContent = `
      * {
        box-sizing: border-box;
      }

      .clock-face {
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        border-radius: 50%;
        display: flex;
        height: ${size}px;
        width: ${size}px;
      }
    `
  }
}