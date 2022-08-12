export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number); // pegando os valore passados dentro do data e jogando dentro de uma array e transforamdno essa array de string e uma array de Number
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(",")
      .map(Number); // pegando os valore passados dentro do data e jogando dentro de uma array e transforamdno essa array de string e uma array de Number
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay(); // me retorna o dias em relação aos dias da semana de 0 á 6
    this.horarioAgora = this.dataAgora.getUTCHours() - 3; // para que fncione em outros paises
  }

  estaAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1; // verifica se o dias da semana está dentro da array, caso seja diferente de -1 (que não é os dias aberto) dará true
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) { // verifica se o dia e o horários são true's
      this.dadosFuncionamento() // tendo que ativar de inicio para que ele peque o horario do funcionamento e o horario atual para fazer a verificação
      this.dadosAgora()
      this.ativaAberto()
    }
    return this;
  }
}
