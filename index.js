const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.getElementById("copyBtn");
const lenghtInput = document.getElementById("numInput");
const uppercaseInput = document.getElementById("uppercaseInput");
const lowercaseInput = document.getElementById("lowercaseInput");
const numbersInput = document.getElementById("numbersInput");
const symbolsInput = document.getElementById("symbolsInput");
const generateBtn = document.getElementById("generateBtn");



copyBtn.addEventListener("click", function (params) {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(passwordInput.value);
})

generateBtn.addEventListener("click", function (e) {
    passwordInput.value = "test12AAdff@"
    generatePassword()
})

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


function generatePassword(lenghtInput = 5) {
    let result = ""
    let count = 0
    let event = []

    for (let i = 0; i < lenghtInput; i++) {
    }
    passwordInput.innerHTML = result
}
function getLenghtPassword(lenghtInput) {
    return lenghtInput.value
}
function getNum() {

    let nums = "0123456789"
    return nums[Math.floor(Math.random() * nums.length)]
}
function getUpperCase() {
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return symbols[Math.floor(Math.random() * symbols.length)]
}
function getLowerCase() {
    let symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase()
    return symbols[Math.floor(Math.random() * symbols.length)]
}
function getSymbolCase() {
    let symbols = "#@$%&^!*"
    return symbols[Math.floor(Math.random() * symbols.length)]
}



function getNumInputState() {
    return numbersInput.value
}
function getUpperCaseInputState() {
    return uppercaseInput.value
}
function getLowerCaseInputState() {
    return lowercaseInput.value
}
function getSymbolCaseInputState() {
    return symbolsInput.value
}
function getOrderOfEvent() {
    
}