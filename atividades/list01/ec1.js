/*
    Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
        a. Bônus: nenhuma nota pode passar de 10.
*/

function create_prompt(text, textType, maxNumber) {

    /*Checar se o valor do prompt é maior ou igual a 1. Caso seja, entra no loop e só para quando o valor do prompt for maior ou igual a 1. */
    let promptValue = prompt(text)

    if (!promptValue.length >= 1) {
        while (true) {
            promptValue = prompt(text)

            if (promptValue.length >= 1) break

        }
    }

    /*Checar se a nota é maior que 10. Caso seja, entra no loop e só para quando o valor da nota for menor ou igual a 10. */
    if (textType(promptValue) > maxNumber) {
        while (true) {
            promptValue = textType(prompt(`A nota não pode ser maior que ${maxNumber}. ${text}`))

            if (promptValue <= maxNumber) break
        }
    }

    return textType(promptValue)
}


const nota1 = create_prompt("Digite a nota 01:", Number, 10)
const nota2 = create_prompt("Digite a nota 02:", Number, 10)
const nota3 = create_prompt("Digite a nota 03:", Number, 10)
const nota4 = create_prompt("Digite a nota 04:", Number, 10)
const notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

if (notaFinal >= 7) {
    alert(`Parabéns, você foi aprovado com sucesso! Sua nota final foi: ${notaFinal}`)
} else if (notaFinal < 5) {
    alert(`Parabéns, você foi reprovado! Sua nota final foi: ${notaFinal}`)
} else {
    alert(`Boa, você vai para a recuperação! Sua nota final foi: ${notaFinal}`)
}