function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let chars = "";
    if (useUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) chars += "0123456789";
    if (useSymbols) chars += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (chars === "") {
        alert("Veuillez sélectionner au moins un type de caractère !");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    const passwordField = document.getElementById("password");
    passwordField.value = password;

    const copyBtn = document.getElementById("copy-btn");
    copyBtn.innerText = "Cliquez pour copier";

    copyBtn.onclick = function () {
        passwordField.select();
        navigator.clipboard.writeText(passwordField.value)
            .then(() => {
                copyBtn.innerText = "✅ Copié !";
                setTimeout(() => {
                    copyBtn.innerText = "Cliquez pour copier";
                }, 2000);
            })
            .catch(err => {
                copyBtn.innerText = "❌ Erreur";
            });
    };
}
