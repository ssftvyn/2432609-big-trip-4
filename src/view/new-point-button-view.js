import AbstractView from '../framework/view/abstract-view.js';

const createNewPointButton = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';

export default class NewPointButtonView extends AbstractView {
  #handleClick = null;
  constructor({onClick}) {
    super();
    this.#handleClick = onClick;
    this.element.addEventListener('click', this.#clickHandler);
    this.disableButton();
  }

  get template() {
    return createNewPointButton();
  }

  disableButton() {
    this.element.disabled = true;
  }

  enableButton() {
    this.element.disabled = false;
  }

  #clickHandler = (event) => {
    event.preventDefault();
    this.#handleClick();
    this.#hideNoPointsText();
  };

  #hideNoPointsText = () => {
    const noPointsTextElement = document.querySelector('.trip-events__msg');
    if (noPointsTextElement) {
      noPointsTextElement.style.display = 'none';
    }
  };
}
