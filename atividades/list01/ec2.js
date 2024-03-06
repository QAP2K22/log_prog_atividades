/*
    Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. 
    Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.
        a. Bônus: A soma dos números não pode passar o total de eleitores.
*/

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
    
    alert(`Total de eleitores: ${totalEleitores}\nBrancos: ${percBranco}\nNulos: ${percNulo}\nVálidos: ${percValido}`)
}