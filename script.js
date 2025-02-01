// Fonction pour générer un mot de passe aléatoire
function generatePassword(length = 16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
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