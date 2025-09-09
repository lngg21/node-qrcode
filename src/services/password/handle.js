import handleCharacters from "./utils/handleCharacters.js";

async function handle() {
    let password = '';

    const passwordLength = parseInt(process.env.LENGTH, 10);
    const characters = await handleCharacters();

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

export default handle;
