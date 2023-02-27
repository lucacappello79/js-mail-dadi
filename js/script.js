// Definisci un array di Email autorizzate a fare il login
// Chiedi la mail all'utente e falla inviare con un input+button
// dopo che l'utente ha cliccato e inviato i dati, controilla che la mail sia presente nell'elenco autorizzati
// ?SE presente, stampare un messaggio adeguato


const mailAuthorized = ["luca@gmail.com", "paolo@gmail.com", "pietro@gmail.com", "marco@gmail.com"]

let inputMail = document.getElementById("userMail");
let logInButton = document.getElementById("logIn");

logInButton.addEventListener("click", function() {

    if (mailAuthorized.includes(inputMail.value))

    console.log("ciao")

})