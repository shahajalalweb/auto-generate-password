const passwordInput = document.querySelector(".pass-box input"),
copyIcon = document.querySelector(".pass-box .fa-solid"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-password");


let allCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVW1234567890!@#$%^&*()_+";

const generatePassword = () => {

    let newPassword = "";

    for (let i = 0; i < rangeInput.value; i++) {

        let randomNumbers = Math.floor(Math.random() * allCharacters.length);

        newPassword += allCharacters[randomNumbers];
    }  
    passwordInput.value = newPassword;
    copyIcon.classList.replace("fa-clipboard","fa-copy");
};

    // slider number added function 
    rangeInput.addEventListener("input", () => {
        sliderNumber.innerText = rangeInput.value;
        generatePassword();
});

// copy passInput value on copyIcon click
copyIcon.addEventListener("click", () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("fa-copy", "fa-clipboard");
});

generatePassword();
generateButton.addEventListener("click", generatePassword);