export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para
    // fazer referência ao objeto
    // da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    // como ele não é um callback direto, não é necessario fazer o bind nele tbm
    this.containerModal.classList.toggle('ativo');
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault(); // para que ele não saia da página
    this.toggleModal();
    // console.log(this) // esse this está fazendo referencia ao "botaoAbrir" e não ao objeto, tendo assim que fazer o "bind"
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    // sendo o "this" referencia ao ao qual estou passando o método
    // console.log(this) - section class="modal-container"
    if (event.target === this.containerModal) {
      // event.target me mostra o local onde foi clicado
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal); // caso clique na area "containerModal" que é a section fora do modal ele chame a função
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
