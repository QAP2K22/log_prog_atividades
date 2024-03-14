const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 03');
});

router.post('/ex01', (req, res) => {
    const salarioBruto = parseInt(req.body.salarioBruto) * parseInt(req.body.valorHora)
    const bonificacao = 0.03 * parseInt(req.body.salarioBruto) * parseInt(req.body.filhos)
    const salarioFinal = salarioBruto + bonificacao

    res.status(200).json(
        {
            codigo: "BONIFICACAO_FILHOS",
            salarioBruto: salarioBruto,
            bonificacao: bonificacao,
            salarioFinal: salarioFinal
        }
    )
});


router.post('/ex04', (req, res) => {
    const { salarioMinimo, horasExtras, depentes, horasTrabalhadas } = req.body

    const valoresHorasTrabalhadas = salarioMinimo * 0.2
    const salarioMes = valoresHorasTrabalhadas * horasTrabalhadas
    const valorDependente = depentes * 32
    const valorHoraExtra = valoresHorasTrabalhadas * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto >= 5000) {
        imposto = salarioBruto * 0.2
    } else if (salarioBruto >= 2000 ) {
        imposto = salarioBruto * 0.1
    }


    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioBruto < 3500 ? 1000 : 500
    const salarioReceber = salarioBruto + salarioLiquido + gratificacao

    res.status(200).json({ salarioBruto, imposto, gratificacao, salarioReceber })
})

module.exports = router;