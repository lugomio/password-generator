const upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '|', '~'];
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const tamanhoOutput = document.getElementById("tamanho-output");
const tamanhoInput = document.getElementById("input-tamanho");

const digitoUpper = document.getElementById("digito-abc-upper");
const digitoLower = document.getElementById("digito-abc-lower");
const digitoNums = document.getElementById("digito-numbers");
const digitoSymbols = document.getElementById("digito-symbols");

const inputSenha = document.getElementById("input-senha");
const badgeSenha = document.getElementById("badge-senha");

const btnCopy = document.getElementById("btn-copiar");
const btnGerar = document.getElementById("btn-gerar");

digitoUpper.addEventListener('change', verificaCheckbox);
digitoLower.addEventListener('change', verificaCheckbox);
digitoNums.addEventListener('change', verificaCheckbox);
digitoSymbols.addEventListener('change', verificaCheckbox);

tamanhoInput.addEventListener('input', () => {
    tamanhoOutput.textContent = tamanhoInput.value;
    gerarSenha();
});

btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(inputSenha.value);

    btnCopy.textContent = "Copiado!";

    setTimeout(() => {
        btnCopy.textContent = "Copiar";
    }, 500);
});

btnGerar.addEventListener('click', gerarSenha);
window.addEventListener('load', gerarSenha);

function gerarSenha() {
    let digits = [];

    if(digitoUpper.checked) digits = digits.concat(upper);
    if(digitoLower.checked) digits = digits.concat(lower);
    if(digitoNums.checked) digits = digits.concat(nums);
    if(digitoSymbols.checked) digits = digits.concat(symbols);

    let senha = "";

    for(let i = 0; i < tamanhoInput.value; i++){
        let currentDigit = Math.floor(Math.random() * digits.length);
        senha += digits[currentDigit];
    }

    nivelForca();

    inputSenha.value = senha;
    return;
}

function nivelForca(){
    const checkedPoints = [digitoUpper.checked, digitoLower.checked, digitoNums.checked, digitoSymbols.checked].reduce((acc, value) => {
        if(value) acc++;
        return acc;
    }, 0);
    let passwordLength = tamanhoInput.value;

    if(checkedPoints >= 3 && passwordLength >= 16 || passwordLength >= 24){
        badgeSenha.textContent = "Muito Forte";
        badgeSenha.classList.remove("bg-red", "bg-black");
        badgeSenha.classList.add("bg-green");
    } else if(passwordLength >= 16 || checkedPoints >= 3){
        badgeSenha.textContent = "Forte";
        badgeSenha.classList.remove("bg-red", "bg-green");
        badgeSenha.classList.add("bg-black");
    } else{
        badgeSenha.textContent = "Fraca";
        badgeSenha.classList.remove("bg-green", "bg-black");
        badgeSenha.classList.add("bg-red");
    }

    return;
}

function verificaCheckbox(){
    if(!digitoUpper.checked && !digitoLower.checked && !digitoNums.checked && !digitoSymbols.checked){
        digitoUpper.checked = true;
    }
    gerarSenha();
    return;
}