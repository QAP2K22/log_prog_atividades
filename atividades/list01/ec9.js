/*
    Faça um script para somar dois números e multiplicar o resultado pelo primeiro número.
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

const num01 = create_prompt("Insira o primeiro valor:",Number)
const num02 = create_prompt("Insira o segundo valor:",Number)
const resultado = (num01 + num02) * num01;
alert(`A soma do número ${num01} e ${num02} dividido pelo número ${num01} é: ${resultado}`)