import debounce from "./debounce.js";

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);

    this.windowMetade = window.innerHeight * 0.6; // calculando 60% da tela para quando o conteudo for aparecer

    this.checkDistande = debounce(this.checkDistande.bind(this), 200); // Apenas usando assim minha função de debounce
  }

  // método que pega a distancia de cada item(section) em relação ao topo

  getDistance() {
    // sendo assim, criando um objeto chamdo "distance"

    // assim utilizando o map, para quando eu faço uma interação e quero o retorno, eu utilizo o map, poreém o map só funciona em array, e o "distance" retoran uma nodeList, e para isso ou eu utilizo o Array.from(), ou eu desestruturo ela

    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop; // irá me retornar números fixos, sendo a distancia da sessão e do topo, sendo apenas 4 sections, então irá me retornar 4 valores fixos o tempo todo

      return {
        element: section, // dizendo de qual objeto que será retornado os valores

        offset: Math.floor(offset - this.windowMetade), // sendo assim o topo da section - a metade da tela do window / site
      };
    });

    // console.log(this.distance) // retornadno os dados da section, e a distancia até o topo (sendo um numero fixo)
  }

  // verifica a distancia de cada sections em relação ao scroll do site

  checkDistande() {
    // sendoconsole.log(window.pageYOffset) // sendo o off set do window referente a página

    // para cada distancia que eu tenho, é uma array

    this.distance.forEach((item) => {
      // sendo cada item a descrição da section e a distancia, me mostrando no total 16 vezes as arrays, sendo 4 de cada

      // se  o topo da página for maior que o topo da section

      if (window.pageYOffset > item.offset) {
        // sendo o item uma section

        item.element.classList.add("ativo"); // sendo o element tambem uma section
      } else if (item.element.classList.contains("ativo")) {
        // fazedno essa verificação por que mesmo que ele não tenha passado por certa parte do site ele fica removendo mesmo assim, então para que funcione corretamente a "animação dos numeros" é necessario que não fique removendo esse atributo/classse toda hora

        item.element.classList.remove("ativo");
      }
    });
  }

  init() {
    if (this.sections.length) {
      // verifica se há sectios para serem ativadas

      this.getDistance();

      this.checkDistande(); // por default se tiver alguma sessção do site que tenha animação ele já fará de inicio

      window.addEventListener("scroll", this.checkDistande); // por ser um callback, o this nestas situações, irá retornar o "window" como objeto, e não o objeto da classe, por isso se tem que fazer o bind
    }

    return this;
  }

  // método para parar com a animação ao scroll, porém não usado no projeto

  stop() {
    window.removeEventListener("scroll", this.checkDistande);
  }
}