import ScrollSuave from "./modules/scroll-suave.js"; // caminho deste arquivo em relação ao arquivo "scroll-suave"
import AccordionList from "./modules/accordion.js"; // caminho deste arquivo em relação ao arquivo "accordion"
import TabNav from "./modules/tabNav.js"; // caminho deste arquivo em relação ao arquivo "tabNav"
import Modal from "./modules/modal.js"; // caminho deste arquivo em relação ao arquivo "modal"
import Tooltip from "./modules/toolTip.js"; // caminho deste arquivo em relação ao arquivo "toolTip"
import fetchAnimais from "./modules/fetch-animais.js"; // caminho deste arquivo em relação ao arquivo "fetch-animais"
import fetchBitcoin from "./modules/fetch-bitcoin.js"; // caminho deste arquivo em relação ao arquivo "fetch-animais"
import ScrollAnima from "./modules/scroll-anima.js"; // caminho deste arquivo em relação ao arquivo "scroll-animacoes"
import DropdownMenu from "./modules/dropdownMenu.js"; // caminho deste arquivo em relação ao arquivo "dropdownMenu"
import MenuMobile from "./modules/menu-mobile.js"; // caminho deste arquivo em relação ao arquivo "fetch-animais"
import Funcionamento from "./modules/date-funcionamento.js"; // caminho deste arquivo em relação ao arquivo "date-funcionamento"

import SlideNav from './modules/slide.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordionList = new AccordionList('[data-anime="accordion"] dt');
accordionList.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchAnimais("./animaisApi.json", ".numeros-grid");

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropdowMenu = new DropdownMenu("[data-dropdown]");
dropdowMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();


// Silde

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');

slide.addControl('.custom-controls') // passando a classe como parametro para ativar as thubes logo a cima do wrapper, e consecutivamente irá desaparecer a navegação pelas bolinha a baixo do wrapper