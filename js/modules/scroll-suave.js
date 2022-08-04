export default class ScrollSuave {
  // trasformando a função em classe
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links); // selecionando o link conforme o usuario passar
    if (options === undefined) {
      // caso o Dev não coloque opções, por padrão ela terá essas
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this); // asssim toda vez que usar o scrollToSection com o this, o this fará referencia ao "ScrollSuave", a classe
  }

  // O prblema que dá é que toda vez que eu utilizar o "this" aqui dentro, ele fará referencia ao "link" do método "addLinkEvent", para arrumar isso tem que se usar o "bind"
  scrollToSection(e) {
    // transformando a função em método
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href"); // Me retornando exatamento o href
    const sectionHtml = document.querySelector(href); // fazendo um link entre o href e a section
    // primero método e mais recomendado de scroll
    sectionHtml.scrollIntoView(this.options); // esse "this.option" acav
  }

  addLinkEvent() {
    // função para adicionar os eventos
    this.linksInternos.forEach((link) => {
      // para usar a variavel, tem que se usar o "this.linksInternos"
      link.addEventListener("click", this.scrollToSection); // p
    });
  }

  init() {
    if (this.linksInternos.length) {
      // verifica se a pessoa passou algum link interno
      this.addLinkEvent();
    }
    return this; // para caso quando eu for chamar o método lá em "scripts" e quiser linkar outros métodosm não de problema
  }
}
