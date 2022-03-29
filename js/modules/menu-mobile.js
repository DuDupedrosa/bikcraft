export default class MenuMobile {
  constructor(nav, button, list, icon, classe, iconClose, iconOpen) {
    // user preferences
    this.nav = document.querySelector(nav);
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);
    this.icon = document.querySelector(icon);
    this.classe = classe;
    this.iconOpen = iconOpen;
    this.iconClose = iconClose;

    // eventos e o redirecionando do method
    this.events = ["click", "touchstart"];
    this.onMenuMobile = this.onMenuMobile.bind(this);
  }

  // method que faz a troca de ícone do menu
  // aberto e fechado, sempre importante passar
  // o caminho correto das imagens para o código
  // funcionar
  onChangeIconMenu(element) {
    if (!element.hasAttribute("data-change")) {
      element.setAttribute("data-change", "");
      element.setAttribute("src", this.iconClose);
    } else {
      element.removeAttribute("data-change");
      element.setAttribute("src", this.iconOpen);
    }
  }

  // method que da o tootle e ativa
  // ou desativa o menu.
  // E ativa o method que faz a troca do ícone
  onMenuMobile(event) {
    event.preventDefault();
    this.list.classList.toggle(this.classe);
    this.onChangeIconMenu(this.icon);
  }

  // add evento de click e touchstart
  addEventButton() {
    this.events.forEach((evento) => {
      this.button.addEventListener(evento, this.onMenuMobile);
    });
  }

  init() {
    if (this.button && this.nav && this.list) {
      this.addEventButton();
    }
    return this;
  }
}
