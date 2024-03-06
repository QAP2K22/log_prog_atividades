/*
    Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário.
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


const salarioAtual = create_prompt("Digite o salário atual:",Number)
const percentualReajuste = create_prompt("Digite o percentual de reajuste:",Number)
const novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100)

alert(`Com o reajuste de ${percentualReajuste}% em cima do salário de R$${salarioAtual}, o novo salário será de ${(novoSalario).toFixed(2)}`)