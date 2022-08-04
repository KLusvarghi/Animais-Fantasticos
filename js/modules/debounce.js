export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    // caso tenha um parametro, ele desestrutura ele e assim é possivel utilizar parametros nessa função
    if (timer) {
      // se já existir um timer ele irá excluir ele, o existente
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      // assim ativando o callback quando o timeout ocorrer com o delay que passamos
      callback(...args);
      timer = null; // definindo o timer como null para que ele não apage o timer, por que se não ele irá excluir o timer atual
    }, delay);
  };
}
