/*
    Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/

function create_prompt(text,textType) {

    let promptValue = prompt(text)
    
    if (!promptValue.length >= 1) {
        while (true) {
            promptValue = prompt(text)

            if (promptValue && promptValue.length >= 1) break
            
        }
    }

    return textType(promptValue)
}

const nota1 = create_prompt("Insira a nota do primeiro bimestre:",Number)
const nota2 = create_prompt("Insira a nota do segundo bimestre:",Number)

const pesoNota1 = 40/100;
const pesoNota2 = 60/100;

const media = (nota1 * pesoNota1 + nota2 * pesoNota2) 

alert(`A média final do aluno foi : ${media}`)
