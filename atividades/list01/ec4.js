/*
    O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica).
    Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.
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
const percentualImposto = ((45 / 100) * custoFabricacao).toFixed(2)
const percentualDistribuidor = ((28 / 100) * custoFabricacao).toFixed(2)
const custoFinal = (custoFabricacao + parseFloat(percentualImposto) + parseFloat(percentualDistribuidor));

alert(`O valor final do veiculo foi de: R$${custoFinal}.`)
