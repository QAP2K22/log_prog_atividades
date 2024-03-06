/*
    O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
    Escreva um script para ler o custo de fábrica de um carro, a porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor
*/

function create_prompt(text, textType) {

    let promptValue = prompt(text)

    if (!promptValue.length >= 1) {
        while (true) {
            promptValue = prompt(text)

            if (promptValue && promptValue.length >= 1) break

        }
    }

    return textType(promptValue)
}

const custoFabricacao = create_prompt("Digite o valor de fábrica do veiculo:", Number)
const percentualImposto = create_prompt("Digite o percentual de imposto:", Number)
const percentualDistribuidor = create_prompt("Digite o percentual do distribuidor:", Number)
const custoFinal = (custoFabricacao + parseFloat((percentualImposto/100)*custoFabricacao) + parseFloat((percentualDistribuidor/100)*custoFabricacao));

alert(`Custo de fabricação: ${custoFabricacao}\nPercentual de imposto: ${percentualImposto}%\nPercentual do Distribuidor: ${percentualDistribuidor}%\nO valor final do veiculo foi de: R$${custoFinal}.`)
