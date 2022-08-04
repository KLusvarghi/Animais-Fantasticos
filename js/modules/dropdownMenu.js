import outsideClick from "./outsideClick-menu.js"; // tendo que passar por cima da regra do eslint por que ele não aceita a extenção .js em imports

export default class DropdownMenu {
  constructor(dropdown, events) {
    this.dropdown = document.querySelectorAll(dropdown);

    // define touchstart e click como argumentos padrão

    // de devents

    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.activeClass = "active";

    this.activeDropdownMneu = this.activeDropdownMneu.bind(this);
  }

  // ativa o dropdownmen e adiciona

  // a fuunção que observa o clique fora dele

  activeDropdownMneu(event) {
    event.preventDefault(); // previnindo que mude de página

    console.log(event.target);

    const element = event.currentTarget; // colocando o current target do evento que ele recebeu dentro de uma variavél

    element.classList.add(this.activeClass);

    outsideClick(element, this.events, () => {
      // passando a array de eventos para simplificar o código lá embaixo

      element.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdownmenu

  addDropdownMenuEvent() {
    this.dropdown.forEach((menu) => {
      // item.addEventListener('click',handleClick)

      // item.addEventListener('touchstart',handleClick) - sendo um evento para mobile, a diferenaça é que ele estarta na hora exata, já o 'click' demora 300milessegundos

      // para utilizar ambos de uma só vez basta colocar em uma Array

      this.events.forEach((useEvent) => {
        menu.addEventListener(useEvent, this.activeDropdownMneu);
      });
    });
  }

  init() {
    if (this.dropdown.length) {
      // verifica se existe o dropDow
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
