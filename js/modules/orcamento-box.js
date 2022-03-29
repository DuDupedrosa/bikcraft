export default class OrcamentoVisibleBox {
  constructor(firstInput, inputsInitials, firstBox, secondBox, classe) {
    // user preferences
    this.firstInput = document.getElementById(firstInput);
    this.inputsActionInitial = document.querySelectorAll(inputsInitials);
    this.boxFirstInput = document.querySelector(firstBox);
    this.boxSecondInput = document.querySelector(secondBox);
    this.classe = classe;

    // events /  bind
    this.events = ['click', 'touchstart'];
    this.onVisibleBox = this.onVisibleBox.bind(this);
  }

  // method que faz toda a verificação se o click
  // foi no primeiro label referente ao primeiro
  // input e add a classe na sua box se não
  // com certeza foi no segundo input e assim
  // e add a classe na segunda na box, sempre
  // removendo a classe da anterior para não mostrar as
  // duas caixas
  onVisibleBox(event) {
    this.attribute = event.target.getAttribute('for');

    if (this.attribute === this.firstInput.getAttribute('id')) {
      this.boxFirstInput.classList.add(this.classe);
      this.boxSecondInput.classList.remove(this.classe);
    } else {
      this.boxSecondInput.classList.add(this.classe);
      this.boxFirstInput.classList.remove(this.classe);
    }
  }

  // add event aos inputs
  addEventInputs() {
    this.events.forEach((evento) => {
      this.inputsActionInitial.forEach((input) => {
        input.addEventListener(evento, this.onVisibleBox);
      });
    });
  }

  init() {
    if (this.firstInput && this.boxFirstInput && this.boxSecondInput) {
      this.addEventInputs();
    }
    return this;
  }
}
