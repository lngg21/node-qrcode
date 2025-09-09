import chalk from "chalk";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow('Escolha a ferramenta: 1(QR Code) | 2(Password)'),
        pattern: /^[1-2]+$/,
        message: chalk.red('Escolha uma opção válida'),
        required: true
    }
]

export default mainPrompt;