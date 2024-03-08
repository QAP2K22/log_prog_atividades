/*
    Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e   mais 5% do valor das vendas por ele efetuadas. 
    Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.
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

const carrosVendidos = create_prompt("Digite a quantidade de carros vendidos",Number)
const comissaoVendaCarros = create_prompt("Qual o valor da comissão por cada carro vendido?",Number)
const valorTotalVendas = carrosVendidos * comissaoVendaCarros
const salarioFuncionario = create_prompt("Digite o valor do salário fixo",Number)
const ValorCarroVendido = valorTotalVendas * 5/100;
const salario =  valorTotalVendas + salarioFuncionario + ValorCarroVendido

alert(`O salário final do vendedor foi de  R$${salario}`)
