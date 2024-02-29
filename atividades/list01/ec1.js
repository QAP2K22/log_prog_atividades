import create_prompt from "./functions/promptCode"
const totalEleitores = create_prompt("Digite a qtd total de eleitores válidos:",Number) 
const nulos = create_prompt("Digite a qtd total de votos brancos:",Number)
const brancos = create_prompt("Digite a qtd total de votos nulos:",Number)
const validos = create_prompt("Digite a qtd total de votos válidos:",Number)
const totalSoma = (nulos+brancos+validos)


if (totalSoma > totalEleitores) {
    alert("Erro: A soma de votos não pode passar o total de eleitores.")
}else {
    const percBranco = brancos / totalEleitores * 100 + "%" 
    const percNulo = nulos / totalEleitores * 100 + "%"
    const percValido = validos / totalEleitores * 100 + "%"
    
    alert(`Brancos: ${percBranco}\nNulo: ${percNulo}\nVálidos: ${percValido}`)
}