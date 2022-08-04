import AnimaNumeros from "./anima-numeros.js"; // caminho deste arquivo em relação ao arquivo "anima-numeros"

export default function fetchAnimais(url, target) {
  
  // Cria a div contendo informações
  // com o total de animais
  function createAnimal(animal) {
    // console.log(animal)
    const div = document.createElement("div"); // criadno 4 vezes por que a função é chamada 4 vezes
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`; 
    return div;
  }

  // preenche cada animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    // atribuindo a uma variavel o retorno da função, sendo passado cada objeto como parametro
    const divAnimal = createAnimal(animal); 
    // vai adicionar um atras do outro a divAnimal
    numerosGrid.appendChild(divAnimal); 
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros(
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    // AnimaNumeros.incrementNumber(document.querySelector('.numeral')) // Podendo animar qualquer numero
    animaNumeros.init(); // començando essa função aqui para que ela não comece assim que meu fetch ocorrer
  }

  // puxa os animais através de um arquivo json
  // e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Faz o Fetch, espera a resposta e transforma em json
      const animaisResponse = await fetch(url); // fazendo um fetch com URL
      const animaisJSON = await animaisResponse.json(); // tranformando a Promise em Objeto
      // console.log(animaisJSON) // retorna uma array de objetos

      // Após a trnasformação de json, atica as funções 
      // para preencher e animair os números
      animaisJSON.forEach(animal => preencherAnimais(animal)); // percorrendo o objeto
      animaAnimaisNumeros() // trendo que iniciar a função aqui no mesmo lugar que ela estava para por que tem que esperar ele fdazer o 'await'
    } catch (error) {
      console.log(error);
    }
  }

  return criarAnimais();
}