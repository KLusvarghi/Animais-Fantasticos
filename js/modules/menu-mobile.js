import outsideClick from "./outsideClick-menu.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector('[data-menu="button"]');

    this.menuList = document.querySelector('[data-menu="list"]');

    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    this.activeClass = "active";

    this.openMenu = this.openMenu.bind(this);

    // this.init() // podendo iniciar a class desta maneira tambem, sem problemas
  }

  openMenu(event) {
    event.preventDefault(); // previnindo o evento porque no mobile ele acaba disparando o evnto de click e touchstart, sendo assim, ele irá abrir e fechar o menu ao mesmo tempo
    this.menuList.classList.toggle(this.activeClass);

    this.menuButton.classList.toggle(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      // ATENÇÃO: só de fazer assim ele daria erro, por que o list está abaixo da box menu, estando fora, e assim na hora que ele clicasse ele já iria remove, assimn não abrindo o menu

      // tendo que fazer com que ele não seja executado no primeiro click

      this.menuList.classList.remove(this.activeClass);

      this.menuButton.classList.remove(this.activeClass);
    }); // passo o que eu quero que feche quando eu clicar fora dele, que no caso é quando clicar fora do "menulist"

    // em segida passo os evento e o callback
  }

  addMenuMobileEvents() {
    // eventos.forEach((event) => {

    //   menuButton.addEventListener(event, openMenu)

    // }) ----- é a mesma coisa que o de baixo

    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    ); // por ter um evento de callback, tem que dar o bind no this
  }

  init() {
    if (this.menuButton && this.menuList) {
      // não precisa utilzar "length"] por que as variaveis são selecionadas com queryselector

      this.addMenuMobileEvents();
    }

    return this;
  }
}
