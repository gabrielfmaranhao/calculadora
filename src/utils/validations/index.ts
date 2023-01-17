import * as yup from "yup";

yup.setLocale({
    mixed:{notType:`O campo é obrigatório!`},
})

export const validationForm = yup.object().shape({
    amount: yup.number().required().min(1000, "O mínimo para o valor da venda é 1000").transform((value) => parseFloat(value)),
    installments: yup.number().max(12,"O máximo são de 12 parcelas").min(1,"o mínimo de parcelas é 1").integer("O campo tem que ser um número inteiro").required(),
    mdr: yup.number().required().transform((value) => parseFloat(value))
})