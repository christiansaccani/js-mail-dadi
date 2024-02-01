const userThrowBtn = document.querySelector("#UserThrow");
const containerElement = document.querySelector("#container");
let userResult;
let computerResult;

// Lancio dei dadi

userThrowBtn.addEventListener("click",
    function (event) {
        event.preventDefault();   //To block auto-refresh

        // Risultati Utente

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        userResult = getRandomInt(1, 6);

        document.querySelector("#userline").innerText =
        "Il tuo risultato: " + userResult;

        // Risultati Computer

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        computerResult = getRandomInt(1, 6);
        
        document.querySelector("#computerline").innerText =
        "Computer: " + computerResult;

        // Risultati dei lanci

        if (userResult > computerResult) {
            document.querySelector("#resultline").innerText =
            "Hai Vinto!"

        } else if (userResult < computerResult) {
            document.querySelector("#resultline").innerText =
            "Hai Perso."

        } else {
            document.querySelector("#resultline").innerText =
            "Incredibilmente un Pareggio! (era meno probabile di vincere, complimenti!)"
        }



    }
)