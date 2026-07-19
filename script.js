const password = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");

const lengthSlider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

// Character sets
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Update slider value
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate password
generateBtn.addEventListener("click", () => {

    let characters = "";

    if (uppercase.checked) characters += upperChars;
    if (lowercase.checked) characters += lowerChars;
    if (numbers.checked) characters += numberChars;
    if (symbols.checked) characters += symbolChars;

    if (characters === "") {
        alert("Please select at least one option.");
        return;
    }

    let generatedPassword = "";

    for (let i = 0; i < lengthSlider.value; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        generatedPassword += characters[randomIndex];
    }

    password.value = generatedPassword;
});

// Copy password
copyBtn.addEventListener("click", () => {

    if (password.value === "") {
        alert("Generate a password first!");
        return;
    }

    navigator.clipboard.writeText(password.value);

    alert("Password copied successfully!");
});