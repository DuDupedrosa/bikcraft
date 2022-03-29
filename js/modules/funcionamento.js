export default class FuncionamentoBikcraft {
  constructor(caixaPai, textCallback, classeAberto, classeFechado) {
    // pegando a div que contain a parte do funcionamento
    // e também o span que vai conter o estilo de aberto ou fechado
    this.funcionamento = document.querySelector(caixaPai);
    this.funcionamentoShowText = document.querySelector(textCallback);
    this.classeAberto = classeAberto;
    this.classeFechado = classeFechado;
  }

  // pegando os dados direto na máquina do usuário
  getUserTime() {
    this.dataObject = new Date();
    this.userDay = this.dataObject.getDay();
    this.userTime = this.dataObject.getUTCHours() - 3;
  }

  // buscando os dados referente ao funcionamento da loja
  // direto nos atributos no dom
  // transformando a string em uma array com number para poder fazer
  // as verificações
  getLocalTime() {
    this.diasLocal = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horaLocal = this.funcionamento.dataset.hora.split(",").map(Number);

    // retornando os valores da verificação
    this.horaAberto =
      this.userTime >= this.horaLocal[0] && this.userTime < this.horaLocal[1];
    this.diasAberto = this.diasLocal.indexOf(this.userDay) !== -1;

    // dando os estilos via class ao span
    // verificação deu true ele add a classe de aberto
    // se não add a classe de fechado
    if (this.horaAberto && this.diasAberto) {
      this.funcionamentoShowText.classList.add(this.classeAberto);
      this.funcionamentoShowText.classList.remove(this.classeFechado);
    } else {
      this.funcionamentoShowText.classList.remove(this.classeAberto);
      this.funcionamentoShowText.classList.add(this.classeFechado);
    }
  }

  init() {
    if (this.funcionamento) {
      this.getUserTime();
      this.getLocalTime();
    }
    return this;
  }
}
