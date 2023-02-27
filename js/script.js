// Definisci un array di Email autorizzate a fare il login
// Chiedi la mail all'utente e falla inviare con un input+button
// dopo che l'utente ha cliccato e inviato i dati, controilla che la mail sia presente nell'elenco autorizzati
// ?SE presente, stampare un messaggio adeguato


const mailsAuthorized = ["luca@gmail.com", "paolo@gmail.com", "pietro@gmail.com", "marco@gmail.com"]

let inputMail = document.getElementById("userMail");
let logInButton = document.getElementById("logIn");
let welcomeEl = document.getElementById("welcome");
let clearButton = document.getElementById("clear");


logInButton.addEventListener("click", function() {

    let verified = false;

    for (let i=0; i < mailsAuthorized.length; i++) {

        if (inputMail.value == mailsAuthorized[i]) {

            verified = true;

        }

    }

    if (verified) { 

        welcomeEl.innerText = "Benvenuto caro utente pagante";
        welcomeEl.style.display = "block";
    
    } else {
    
        alert("accesso negato"); 
    }

})







   // if (mailAuthorized.includes(inputMail.value))

 /*  for (let i = 0; i < mailsAuthorized.length; i++) {

    if (inputMail.value === mailsAuthorized[i]) {

    welcomeEl.innerText = "Benvenuto caro utente pagante";
    welcomeEl.style.display = "block";

    console.log("accesso autorizzato");
    return;

   } 
}

alert("Accesso negato");

})
*/

clearButton.addEventListener("click", function() {

    inputMail.value = ""
    welcomeEl.style.display = "none"
})


// dadi

// Genero un numero random da 1 a 6 per il giocatore e uno per il computer
let numberPlayer = Math.floor(Math.random() * 6) + 1;
let numberComputer = Math.floor(Math.random() * 6) + 1;

console.log("Player: " + numberPlayer);
console.log("Computer: " + numberComputer);

// Confronto dei punteggi
if (numberPlayer > numberComputer) {

  console.log("player 1 won");

} else if (numberComputer > numberPlayer) {

  console.log("computer won");

} else {

  console.log("even");

}
