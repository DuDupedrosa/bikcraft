export default class AccordionList {
  constructor(questionAccordion, classe) {
    // users preferences
    this.accordionListQuestion = document.querySelectorAll(questionAccordion);
    this.classe = classe;

    this.events = ['click', 'touchstart'];
    this.onShowAnswer = this.onShowAnswer.bind(this);
    this.addEventAccordionQuestion = this.addEventAccordionQuestion.bind(this);
  }

  // method que traz a resposta e nela adiciona a classe de ativo
  // e também add a classe de ativo na box que segura o bloco
  // de questão para poder gerar um efeito específico no before
  // junto com o css
  onShowAnswer(event) {
    event.preventDefault();
    this.answer = event.target.nextElementSibling;
    this.boxItem = event.target.parentElement;
    this.answer.classList.toggle(this.classe);
    this.boxItem.classList.toggle(this.classe);
  }

  // method que add os events
  addEventAccordionQuestion() {
    this.accordionListQuestion.forEach((question) => {
      this.events.forEach((evento) => {
        question.addEventListener(evento, (event) => {
          this.onShowAnswer(event);
        });
      });
    });
  }

  init() {
    if (this.accordionListQuestion.length) {
      this.addEventAccordionQuestion();
    }
    return this;
  }
}
