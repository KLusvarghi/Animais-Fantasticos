export default function fetchBitcoin(url, target) {
    fetch(url)
        .then(r => r.json())
        .then(bitcoin => {
            const btcPreco = document.querySelector(target)
            btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4) // obtendo um valor de 1000 reais em bitcoins. E arredondando para até 4 casas decimais
        }).catch(error => {
            console.log(Error(error))
        })
}
// https://blockchain.info/ticker