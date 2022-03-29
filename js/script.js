import MenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';
import AccordionList from './modules/accordion.js';
import FuncionamentoBikcraft from './modules/funcionamento.js';
import RegexpForValidation from './modules/regexp.js';
import OrcamentoVisibleBox from './modules/orcamento-box.js';
import OrcamentoProdutosVisible from './modules/orcamento-produtos.js';

// class que ativa o menu mobile importante sempre
const menuMobile = new MenuMobile(
  '[data-menu="nav"]',
  '[data-menu="button"]',
  '[data-menu="list"]',
  '[data-menu="icon"]',
  'active-menu',
  './img/icons/close-menu.svg',
  './img/icons/icon-menu-mobile.svg',
);
menuMobile.init();

const scrollReturnTop = new ScrollSuave('[data-anima="scroll-suave-top"]', {
  behavior: 'smooth',
  block: 'start',
});
scrollReturnTop.init();

// novos atributos pois tivemos que passar novos
// caminhos para as imagens das bicicletas internas
// então só removemos os atributos inicias e colocamos
// outros com o novo caminho da imagem
const menuMobileBikeInter = new MenuMobile(
  '[data-menu="nav-bike-intern"]',
  '[data-menu="button-bike-intern"]',
  '[data-menu="list-bike-intern"]',
  '[data-menu="icon-bike-intern"]',
  'active-menu-bike-intern',
  '../img/icons/close-menu.svg',
  '../img/icons/icon-menu-mobile.svg',
);
menuMobileBikeInter.init();

// lista de definição passando sempre a dt que recebe
// o evento de click e a classe que vai ser adicionada
// para poder das visibilidade com ela via css
const accordionList = new AccordionList(
  '[data-accordion="question"]',
  'active-list',
);
accordionList.init();

// funcionamento da loja Rj
const funcionamentoRj = new FuncionamentoBikcraft(
  '[data-funcionamento-Rj="dados"]',
  '[data-funcionamento-Rj="user"]',
  'aberto',
  'fechado',
);
funcionamentoRj.init();

// funcionamento da loja Sp
const funcionamentoSp = new FuncionamentoBikcraft(
  '[data-funcionamento-Sp="dados"]',
  '[data-funcionamento-Sp="user"]',
  'aberto',
  'fechado',
);
funcionamentoSp.init();

const regexpForValidation = new RegexpForValidation(
  '[data-regexp="email"]',
  '[data-box="input-email"]',
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'mensagem-erro-email',
  'active-erro',
  'Digite um email válido',
);
regexpForValidation.init();

// classe que da a visibilidade as primeiras caixas
// relacionadas aos primeiros inputs
const orcamentoVisibleBox = new OrcamentoVisibleBox(
  'bicicletas',
  '[data-visible="inputs-iniciais"]',
  '[data-visible="bicicletas"]',
  '[data-visible="seguros"]',
  'active-box',
);
orcamentoVisibleBox.init();

// classe que da visibilidade aos produtos internos
const orcamentoProdutosVisible = new OrcamentoProdutosVisible(
  '[data-visible="bicicletas-input"]',
  '[data-visible="bicicletas-information"]',
  'active-box',
);
orcamentoProdutosVisible.init();
