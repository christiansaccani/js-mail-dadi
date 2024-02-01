const userThrowBtn = document.querySelector("#UserThrow");
const containerElement = document.querySelector("#container");
let userResult;
let computerResult;

// Lancio dei dadi

userThrowBtn.addEventListener("click",
    function (event) {
        event.preventDefault();   //To block auto-refresh
        console.log("Invio Click");

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        userResult = getRandomInt(1, 6);

        const newElementUser = document.createElement("div");
        newElementUser.innerText = ("Il tuo risultato: " + userResult);
        containerElement.append(newElementUser);

        console.log("Risultato Utente:", userResult);




        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        computerResult = getRandomInt(1, 6);
        console.log("Risultato Computer:", computerResult);

        if (userResult > computerResult) {
            console.log("L'utente ha vinto");
        } else if (userResult < computerResult) {
            console.log("Il computer ha vinto");
        } else {
            console.log("Pareggio");
        }



    }
)