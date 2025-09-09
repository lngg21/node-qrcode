import chalk from "chalk";

const promptQRCode = [
    {
        name: 'link',
        description: chalk.yellow("Digite o link para gerar o QR Code:"),
    },
    {
        name: 'type',
        description: chalk.blue("Escolha o tipo de QR Code (1 - Normal(Imagem) | 2 - Terminal):"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Digite 1 ou 2'),
        required: true
    }
]

export default promptQRCode;