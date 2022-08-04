export default class Modal {
  constructor(botaoAbri, botaoFechar, containerModal) {
    this.botaoAbri = document.querySelector(botaoAbri);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutSide = this.clickOutSide.bind(this);
  }

  // abre e fecha o modal
  toggleModal() {
    // como ele não é um callback direto, não é necessario fazer o bind nele tbm
    this.containerModal.classList.toggle("ativo");
  }

  // add o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    event.preventDefault(); // para que ele não saia da página
    // console.log(this) // esse this está fazendo referencia ao "botaoAbrir" e não ao objeto, tendo assim que fazer o "bind"
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  clickOutSide(event) {
    // sendo o "this" referencia ao ao qual estou passando o método
    // console.log(this) - section class="modal-container"
    if (event.target === this.containerModal) {
      // event.target me mostra o local onde foi clicado
      this.toggleModal();
    }
  }

  // add os eventos aos elementod do modal
  addModalEvent() {
    this.botaoAbri.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickOutSide); // caso clique na area "containerModal" que é a section fora do modal ele chame a função
  }

  init() {
    if (this.botaoAbri && this.botaoFechar && this.containerModa) {
      this.addModalEvent();
    }
    return this;
  }
}

// export default class Modal {
//   constructor(botaoAbrir, botaoFechar, containerModal) {
//     this.botaoAbrir = document.querySelector(botaoAbrir);
//     this.botaoFechar = document.querySelector(botaoFechar);
//     this.containerModal = document.querySelector(containerModal);

//     // bind this ao callback para
//     // fazer referência ao objeto
//     // da classe
//     this.eventToggleModal = this.eventToggleModal.bind(this);
//     this.cliqueForaModal = this.cliqueForaModal.bind(this);
//   }

//   // abre ou fecha o modal
//   toggleModal() {
//     this.containerModal.classList.toggle('ativo');
//   }

//   // adiciona o evento de toggle ao modal
//   eventToggleModal(event) {
//     event.preventDefault();
//     this.toggleModal();
//   }

//   // fecha o modal ao clicar do lado de fora
//   cliqueForaModal(event) {
//     if (event.target === this.containerModal) {
//       this.toggleModal();
//     }
//   }

//   // adiciona os eventos aos elementos do modal
//   addModalEvents() {
//     this.botaoAbrir.addEventListener('click', this.eventToggleModal);
//     this.botaoFechar.addEventListener('click', this.eventToggleModal);
//     this.containerModal.addEventListener('click', this.cliqueForaModal);
//   }

//   init() {
//     if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
//       this.addModalEvents();
//     }
//     return this;
//   }
// }
