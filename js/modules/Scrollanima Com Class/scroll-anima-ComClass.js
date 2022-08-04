export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.6; // calculando 60% da tela para quando o conteudo for aparecer
    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((item) => {
      const sectionTop = item.getBoundingClientRect().top; // pega a posição do topo até a section
      const isSectionVisible = sectionTop - this.windowMetade < 0; // calcula mais ou menos 60% da tela e retornando true ou false
      if (isSectionVisible) {
        item.classList.add("ativo"); //
      } else if (item.classList.contains("ativo")) {
        // fazedno essa verificação por que mesmo que ele não tenha passado por certa parte do site ele fica removendo mesmo assim, então para que funcione corretamente a "animação dos numeros" é necessario que não fique removendo esse atributo/classse toda hora
        item.classList.remove("ativo");
      }
    });
  }

  init() {
    this.animaScroll(); // por default se tiver alguma sessção do site que tenha animação ele já fará de inicio
    window.addEventListener("scroll", this.animaScroll); // por ser um callback, o this nestas situações, irá retornar o "window" como objeto, e não o objeto da classe, por isso se tem que fazer o bind
    return this;
  }
}
