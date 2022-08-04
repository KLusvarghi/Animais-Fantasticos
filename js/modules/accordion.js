export default class AccordionList {
  constructor(listItens) {
    this.accordionList = document.querySelectorAll(listItens);
    this.activeClass = "ativo";
  }

  toggleAcordion(item) { // recebendo o item ppor que ele irá falar com cada item e nao com o objeto da classe em si
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // adiciona os eventos ao accordion 
  
  addAccordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAcordion(item)); // passando a função anonima para falar com o item, e não com o objeto da classe em si
    });
  }

  init(){
    if (this.accordionList.length) { // caso não seja passado nada em accordionList
      // ativar priemiro item
      this.toggleAcordion(this.accordionList[0]) // invés de utilizar o if para deixar o priemirpo item aberto logo que entra no site, na inicialização já ativamos o método "toggleAcordion", ativando
      this.addAccordionEvent()
    }
  }

    // se tunha esse if para ele ativar o primeiro item logo que abrisse o site, mas podemos fazer de outra maneira

    // if (accordionList.length) { 
    //   accordionList[0].classList.add(this.activeClass);
    //   accordionList[0].nextElementSibling.classList.toggle(this.activeClass);
    // }
}