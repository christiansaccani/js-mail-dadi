const userThrowBtn = document.querySelector("#UserThrow");
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
        console.log("Risultato Utente:", userResult);

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        computerResult = getRandomInt(1, 6);
        console.log("Risultato Computer:", computerResult);

       



    }
)