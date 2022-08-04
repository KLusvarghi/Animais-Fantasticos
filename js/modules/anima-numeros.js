export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass

    // bind o this do objeto ao callback da mutação
    this.handleMutation = this.handleMutation.bind(this);
  }

  // método que recebe elemento do Dom, e faz o incremento a partir de 0 até o final

  // Quando eu tenho um método / função que não precisa ou não faz referência a nada do meu contrutor, eu posso definir esse método como 'static'
  static incrementNumber(numero){
    const total = +numero.innerText; 
    const incremento = Math.floor(total / 100); 
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start; 
      if (start > total) {
        numero.innerText = total; 
        clearInterval(timer); 
      }
    }, 25 * Math.random()); 
  }

  // ativa o 'incrementNumber' para cada número selecionado do Dom
  animaNumeros() {
    // porem para chamar um método estático, tem que fazer referencia ao construtor
    this.numeros.forEach(numero => this.constructor.incrementNumber(numero));
  }

  // Função que ocorre quando a mutações ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona o MutationObserver para verificar
  // quanto a classe ativo é adiciona ao element target
  addMutationObserver(){
    // todo observador será criado aq e colcoado como método dentro da minha classe
    this.observer = new MutationObserver(this.handleMutation);
    
    // tendo que falar para o "observador" o que ee tem que ficar observando

    // tendo que falar qual target/item ele tem que observar
    // o 2º parametro que tenho que eu vou passar é "atributos", para ele observar os atributos da variavel
    this.observer.observe(this.observerTarget, { attributes: true });

    // Tem um erro que quando a página pé carreganda o efeito dos números já carrega, poderiamos colocar para esse efeito aocntecer apenas quando a classe recebe um "ativo", mas remos fazer com um "observador
  }

  init(){
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver();
    }
    return this;
  }
}