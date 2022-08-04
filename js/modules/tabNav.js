export default class TabNav {
  constructor(li, section) {
    this.tabMenu = document.querySelectorAll(li); // selecionando cada li
    this.tabContent = document.querySelectorAll(section); // selecionando cada section
    this.activeClass = 'ativo'
  }

  // ativa a tab de acordo com o index
  activeTab(index) {
    // criadno função que ativa a tab
    this.tabContent.forEach((item) => {
      // percorrendo o conteudo
      item.classList.remove(this.activeClass); // removendo a classe ativo de todas as sections dos conteudos
    });
    const direcao = this.tabContent[index].dataset.anime
    this.tabContent[index].classList.add(this.activeClass, direcao); // adicioando a classe ativo ao item clicado
  }
  

  // adiiona os ventos as tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      // percorrendo o lista de imagens
      item.addEventListener("click", () => {
        // adicoandno um evento a imagem clicada
        this.activeTab(index); // chamando a função que adiciona a class passado o index
      });
    });
  }

  init() {
    // verificando o total de itens dentro de tabmenu e tabcontent, caso algum deles estejam vazio ele não exibe nada e não dará erro no meu console
    if (this.tabMenu.length && this.tabContent.length) {

      // ativar o priemiro item para
      // this.tabContent[0].classList.add(this.activeClass); // para que sempre que entrar no site tenha um texto exibido, em ativo
      // invés de fazer dessa maneira, basta eu ativar passado o valor do index, que é "0"
      this.activeTab(0) // passando o valor do index

      this.addTabNavEvent()
    }
  }
}