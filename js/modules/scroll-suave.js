export default class ScrollSuave {
  constructor(link, scrollObj) {
    // user preferences
    this.linkToSection = document.querySelectorAll(link);
    this.scrollObj = scrollObj;

    this.events = ["click", "touchstart"];
    this.onScrollSuave = this.onScrollSuave.bind(this);
  }

  // method que puxa so o href do link e busca
  // a section a que ele está ligado e com isso
  // colocamos o scroll suave
  onScrollSuave(event) {
    event.preventDefault();
    this.link = event.currentTarget;
    this.getHref = this.link.getAttribute("href");
    this.section = document.querySelector(this.getHref);
    this.section.scrollIntoView(this.scrollObj);
  }

  // add event de click e de touchstart
  // sempre garantindo que se passarmos um link ou mais
  // o código vai funcionar
  addEventLinkToSection() {
    this.events.forEach((evento) => {
      this.linkToSection.forEach((link) => {
        link.addEventListener(evento, this.onScrollSuave);
      });
    });
  }

  init() {
    if (this.linkToSection.length) {
      this.addEventLinkToSection();
    }
    return this;
  }
}
