// Definisci un array di Email autorizzate a fare il login
// Chiedi la mail all'utente e falla inviare con un input+button
// dopo che l'utente ha cliccato e inviato i dati, controilla che la mail sia presente nell'elenco autorizzati
// ?SE presente, stampare un messaggio adeguato


const mailAuthorized = ["luca@gmail.com", "paolo@gmail.com", "pietro@gmail.com", "marco@gmail.com"]

let inputMail = document.getElementById("userMail");
let logInButton = document.getElementById("logIn");
let welcomeEl = document.getElementById("welcome")
let clearButton = document.getElementById("clear")

logInButton.addEventListener("click", function() {

   // if (mailAuthorized.includes(inputMail.value))

   for (let i = 0; i < mailAuthorized.length; i++) {

    if (inputMail.value == mailAuthorized[i])

    welcomeEl.innerText = "Benvenuto caro utente pagante"

    console.log("accesso autorizzato")

   }
   
})

clearButton.addEventListener("click", function() {

    inputMail.value = ""
    welcomeEl.style.display = "none"
})



