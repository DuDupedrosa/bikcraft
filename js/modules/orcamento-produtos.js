export default class OrcamentoProdutosVisible {
  constructor(inputs, box, classe) {
    // user preferences
    this.inputs = document.querySelectorAll(inputs);
    this.inputsBoxInformation = document.querySelectorAll(box);
    this.classe = classe;

    // events
    this.events = ['click', 'touchstart'];
  }

  // method que add a classe de ativo na box
  // de acordo com o index do input que é puxado
  // lembrando que por terem a mesma quantidade de
  // inputs e de box a interação via index é possível
  // de ocorrer.
  onVisibleBox(input, index) {
    this.inputsBoxInformation.forEach((box) => {
      box.classList.remove(this.classe);
    });
    this.inputsBoxInformation[index].classList.add(this.classe);
    this.inputs.forEach((input) => {
      input.classList.remove(this.classe);
    });
    input.classList.add(this.classe);
  }

  // add os events ao inputs e ligando a callback
  // com uma arrow function para conseguir pegar o index
  // da array no evento de click
  addEventInputs() {
    this.events.forEach((evento) => {
      this.inputs.forEach((input, index) => {
        input.addEventListener(evento, () => {
          this.onVisibleBox(input, index);
        });
      });
    });
  }

  init() {
    if (this.inputs && this.inputsBoxInformation) {
      this.addEventInputs();
    }
    return this;
  }
}
