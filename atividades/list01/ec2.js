 import create_prompt from "./functions/promptCode"


/* function create_prompt(text,textType) {

    let promptValue = prompt(text)
    
    if (!promptValue.length >= 1) {
        while (true) {
            promptValue = prompt(text)

            if (promptValue.length >= 1) break
            
        }
    }

    return textType(promptValue)
}
 */

const nota1 = create_prompt("Digite a nota 01:",Number)
const nota2 = create_prompt("Digite a nota 02:",Number)
const nota3 = create_prompt("Digite a nota 03:",Number)
const nota4 = create_prompt("Digite a nota 04:",Number)
const notaFinal = (nota1+nota2+nota3+nota4) / 4

if (notaFinal >= 7 ) {
    alert(`Parabéns, você foi aprovado com sucesso! Sua nota final foi: ${notaFinal}`)
} else if (notaFinal < 5) {
    alert(`Parabéns, você foi reprovado! Sua nota final foi: ${notaFinal}`)
} else {
    alert(`Boa, você vai para a recuperação! Sua nota final foi: ${notaFinal}`)
}