import handle from "./handle.js";
import chalk from "chalk";

async function createPassword(params) {
    console.log(chalk.green("Password"));    
    const password = await handle();
    console.log(chalk.blue("Generated Password: ") + chalk.bold(password));
}

export default createPassword;