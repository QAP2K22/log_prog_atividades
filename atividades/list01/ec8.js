/*
    Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem ser fornecidos.
    OBS: V = PI * Raio^2 * Altura
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

const pi = Math.PI /* Função chique */
const raio = create_prompt("Insira o valor do raio",Number)
const altura = create_prompt("Insira o valor da altura",Number)


const volume = parseFloat(pi * (raio**2) * altura).toFixed(2)


alert(`O volume da caixa será de ${volume} metros cúbicos`)