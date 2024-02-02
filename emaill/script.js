const emailRegistrate = [];
const searchBtn = document.querySelector("button");

let userMail;
let signedMail = false;

//cratore di mail nell' array

for (let i=0; i<10; i++) {
    emailRegistrate.push("email" + i +"@boolean.com")
}

searchBtn.addEventListener("click",
    function (event) {
        event.preventDefault(); 

        userMail = document.getElementById("emailfill").value;

        for (let i=0; i<emailRegistrate.length; i++) {

            if (userMail === emailRegistrate[i]) {
                signedMail = true;
            }
        }

        if (signedMail == true) {
            console.log("Login Effettuato");
            document.querySelector('#resultline').innerText =
            "Questo indirizzo risulta registrato, Bentornato!";

            document.querySelector('#resultline').style.backgroundColor = "green";
            document.querySelector('#resultline').style.color = "white";

            signedMail = false;

        } else {
            console.log("Login non possibile");
            document.querySelector('#resultline').innerText =
            "Questo indirizzo email non risulta registrato, ti preghiamo di registrarti al sito e riprovare!";

            document.querySelector('#resultline').style.backgroundColor = "red";
            document.querySelector('#resultline').style.color = "white";

        }
    }
)

