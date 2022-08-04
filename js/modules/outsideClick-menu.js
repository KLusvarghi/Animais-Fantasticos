// passando o 'events' como parametro para otimizar e para caso queira passar mais de um evento
export default function outsideClick(element, events, callBack) {
  const html = document.documentElement; // pegando o meu HTML
  const outside = "data-outside";

  function handleOutsideClick(event) {
    // console.log(event.target)
    // no caso o 'contains' é para ver se contem algo que vai de parametro nele
    if (!element.contains(event.target)) {
      // verifica se o que foi clicado é a parte do element, que no caso é a box do dropdown for !FALSA

      element.removeAttribute(outside); // quadno ele clicar fora irá remover o atributo 'data-outside'

      events.forEach((userEvent) => {
        // fazendo isso para remover de todos eventos
        html.removeEventListener(userEvent, handleOutsideClick);
      });

      callBack();
      html.removeEventListener("click", handleOutsideClick); // removendo os eventos que já foram usados
    }
  }

  if (!element.hasAttribute(outside)) {
    // verificando se não tem o atributo 'data-outside', caso não tenha ele irá ativa isso uma vez

    events.forEach((userEvent) => {
      // fazendo isso para remover de todos eventos
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      });
      // colocando esse SetTimeout por que ele é assincrono e assim essa requisição ficará na fila do bobble, e só quando essa fila terminar o settimeout será exibido
    });

    // adicioanndo um atributo para evitar que ele não adicione varios eventos
    element.setAttribute(outside, "");
  }
}
