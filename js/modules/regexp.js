export default class RegexpForValidation {
  constructor(
    input,
    boxOfInput,
    regexp,
    classeStyle,
    classeErro,
    contentOfErro
  ) {
    this.input = document.querySelector(input);
    this.boxOfInput = document.querySelector(boxOfInput);
    this.regexp = regexp;
    this.classeStyle = classeStyle;
    this.classeErro = classeErro;
    this.contentOfErro = contentOfErro;

    this.onValidationInput = this.onValidationInput.bind(this);
  }

  // method que cria toda a estrutura da mensagem de erro
  creatingErrorMessage() {
    this.span = document.createElement("span");
    this.span.classList.add(this.classeStyle);
    this.span.innerText = this.contentOfErro;
    this.boxOfInput.appendChild(this.span);
  }

  // method que returna se deu match ou não com a regexp
  verificValueOfInput(element) {
    this.match = element.match(this.regexp);
    return this.match && this.match[0] === element;
  }

  // method que callback do event de change
  // e ele só faz sua ação a partir da validação
  // do do valor digitado que vai dar match ou não
  // com a regexp passada.
  // simplesmente dependendo do que der é add uma classe
  // que via css surge a mensagem de erro e seus estilos
  onValidationInput(event) {
    if (this.verificValueOfInput(event.target.value)) {
      this.span.classList.remove(this.classeErro);
    } else {
      this.span.classList.add(this.classeErro);
    }
  }

  // method que add o event no input para pegar
  // o valor que u usuário digitou e poder fazer
  // a validação
  addEventInput() {
    this.input.addEventListener("change", this.onValidationInput);
  }

  init() {
    if (this.input && this.regexp) {
      this.addEventInput();
      this.creatingErrorMessage();
    }
    return this;
  }
}
