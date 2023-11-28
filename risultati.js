var path = window.location.pathname;
var page = path.split("/").pop();
console.log("Siamo su:" + page);
const body = document.querySelector("body");
const username = document.querySelector("#username").textContent;
const sesso = document.querySelector("#sesso").textContent;
const gusto = document.querySelector("#gusto").textContent;
const capelli = document.querySelector("#capelli").textContent;
const carattere = document.querySelector("#carattere").textContent;
console.log(username);
console.log(sesso);
console.log(gusto);
console.log(capelli);
console.log(carattere);

/* VERSIONE CON RISULTATI MOSTRATI AL CLICK PULSANTE
const caricaRisultati = document.querySelector("#carica");
caricaRisultati.addEventListener("click", verifica);

function verifica() {
  fetch("verifica.php").then(onResponse).then(onJSONVerifica);
}

function onJSONVerifica(json) {
  if (page == "loadingPreda.php") {
    if (json[1].totale < 5) {
      alert("I risultati saranno disponibili a breve, riprova tra poco...");
    } else {
      stampa();
    }
  } else if (page == "loadingPredatore.php") {
    if (json[0].totale < 5) {
      alert("I risultati saranno disponibili a breve, riprova tra poco...");
    } else {
      stampa();
    }
  }
}
*/

/*
window.onload = function surprise() {
  (function loop() {
    var now = new Date();
    if (
      // now.getDate() === 12 &&
      now.getHours() === 12 &&
      now.getMinutes() === 18
    ) {
      const stringaProva = document.createElement("h1");
      stringaProva.textContent = "Questa è una stringa di prova";
      body.appendChild(stringaProva);
    }
    now = new Date(); // allow for time passing
    var delay = 60000 - (now % 60000); // exact ms to next minute interval
    setTimeout(loop, delay);
  })();
};*/

// window.onload = function stampa() {
const fetch1 =
  "risultati_preda.php?username=" +
  username +
  "&sesso=" +
  sesso +
  "&gusto=" +
  gusto +
  "&capelli=" +
  capelli +
  "&carattere=" +
  carattere;
// const fetch2 =
//   "risultati_predatore.php?username=" +
//   username +
//   "&sesso=" +
//   sesso +
//   "&gusto=" +
//   gusto +
//   "&capelli=" +
//   capelli +
//   "&carattere=" +
//   carattere;

// if (page == "stampa_risultati_preda.php") {
fetch(fetch1).then(onResponse).then(onJSONPreda);
// }
// else if (page == "stampa_risultati_predatore.php") {
//   fetch(fetch2).then(onResponse).then(onJSONPredatore);
// }
// };

function onJSONPreda(json) {
  if (json[0].length !== 0) {
    // const risultati = document.querySelector("#risultati");
    console.log(json);
    sessionStorage.setItem("arrayRisultati", JSON.stringify(json));

    // for (let i = 0; i < json.length; i++) {
    // sessionStorage.setItem("nomePredatore", json[i].Predatore);
    // sessionStorage.setItem("numeroTavolo", json[i].numero_tavolo);
    // sessionStorage.setItem("punti", Math.round((json[i].Punti / 2) * 100));
    // const nomePredatore = document.createElement("h2");
    // nomePredatore.textContent = [i + 1] + "°) Username:" + json[i].Predatore;
    // const numero_tavolo = document.createElement("h2");
    // numero_tavolo.textContent = "Numero tavolo:" + json[i].numero_tavolo;
    // const punti = document.createElement("h3");
    // punti.textContent =
    //   "Compatibilità:" + Math.round((json[i].Punti / 2) * 100) + "%";
    // risultati.appendChild(nomePredatore);
    // risultati.appendChild(numero_tavolo);
    // risultati.appendChild(punti);

    // fetch("aggiornaMatchPredatore.php?username=" + json[i].Predatore);
    // }
    // const eliminaPreda = document.createElement("button");
    // eliminaPreda.textContent = "Logout";
    // risultati.appendChild(eliminaPreda);
    // eliminaPreda.onclick = function () {
    //   location.href = "logout.php";
    // };
  }
  // else {
  //   const noResults = document.createElement("h2");
  //   noResults.textContent = "Nessuna corrispondenza trovata";
  //   risultati.appendChild(noResults);
  //   const eliminaPreda = document.createElement("button");
  //   eliminaPreda.textContent = "Logout";
  //   risultati.appendChild(eliminaPreda);
  //   eliminaPreda.onclick = function () {
  //     location.href = "logout.php";
  //   };
  // }
}

/*
function onJSONPredatore(json) {
  if (json[0].length !== 0) {
    const risultati = document.querySelector("#risultati");
    console.log(json);

    for (let i = 0; i < json.length; i++) {
      const nomePreda = document.createElement("h2");
      nomePreda.textContent = [i + 1] + "°) Username:" + json[i].Preda;
      const numero_tavolo = document.createElement("h2");
      numero_tavolo.textContent = "Numero tavolo:" + json[i].numero_tavolo;
      const punti = document.createElement("h3");
      punti.textContent =
        "Compatibilità:" + Math.round((json[i].Punti / 2) * 100) + "%";
      risultati.appendChild(nomePreda);
      risultati.appendChild(numero_tavolo);
      risultati.appendChild(punti);

      fetch("aggiornaMatchPreda.php?username=" + json[i].Preda);
    }
    const eliminaPredatore = document.createElement("button");
    eliminaPredatore.textContent = "Logout";
    risultati.appendChild(eliminaPredatore);
    eliminaPredatore.onclick = function () {
      location.href = "logoutPredatore.php";
    };
  } else {
    const noResults = document.createElement("h2");
    noResults.textContent = "Nessuna corrispondenza trovata";
    risultati.appendChild(noResults);
    const eliminaPredatore = document.createElement("button");
    eliminaPredatore.textContent = "Logout";
    risultati.appendChild(eliminaPredatore);
    eliminaPredatore.onclick = function () {
      location.href = "logoutPredatore.php";
    };
  }
}*/

function onResponse(response) {
  return response.json();
}
