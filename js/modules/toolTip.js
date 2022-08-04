export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind do objeto da classe aos callbacks
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if (event.pageX + 230 > window.innerWidth) { // se a posição do mause + 200 for maior do que "window.innerWidth" que é um valor fixo, que é o tamanho da minha página
      this.tooltipBox.style.left = `${event.pageX - 190}px`;
    }else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  // desestruturando meu objeto, para que simplifique na hora de colcoar o "current tatget"
  // porem, assim não será possivel utilizar as outras propriedades do "event"
  onMouseLeave({currentTarget}) { 
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltip box
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox; // colocando ela dentro de um parametro da minha classe, assim quando ela é criado ela já retorna direto no parâmetro
  }

  // Cria a tooltip e adiciona os eventos
  // de mousemove e mouseleave ao target
  onMouseOver({currentTarget}) {
    // cria a tooltip boz e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave); 
  }

  // Adiciona os eventos de mouseover a cada tooltip
  addTooltipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      // se existir as tooltips
      this.addTooltipsEvent();
    }
    return this;
  }
}
