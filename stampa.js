var path = window.location.pathname;
var page = path.split("/").pop();
console.log("Siamo su:" + page);
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

window.onload = function stampa() {
  const fetchPreda =
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
  const fetchPredatore =
    "risultati_predatore.php?username=" +
    username +
    "&sesso=" +
    sesso +
    "&gusto=" +
    gusto +
    "&capelli=" +
    capelli +
    "&carattere=" +
    carattere;

  if (page == "stampa_risultati_preda.php") {
    fetch(fetchPreda).then(onResponse).then(onJSONPreda);
  } else if (page == "stampa_risultati_predatore.php") {
    fetch(fetchPredatore).then(onResponse).then(onJSONPredatore);
  }
};

function onResponse(response) {
  return response.json();
}

function onJSONPreda(json) {
  console.log(json);
  if (json[0].length !== 0) {
    const risultati = document.querySelector("#risultati");

    for (let i = 0; i < json.length; i++) {
      const nomePredatore = document.createElement("h2");
      nomePredatore.textContent = [i + 1] + "°) Username:" + json[i].Predatore;
      const numero_tavolo = document.createElement("h2");
      numero_tavolo.textContent = "Numero tavolo:" + json[i].numero_tavolo;
      const punti = document.createElement("h3");
      punti.textContent =
        "Compatibilità:" + Math.round((json[i].Punti / 2) * 100) + "%";
      risultati.appendChild(nomePredatore);
      risultati.appendChild(numero_tavolo);
      risultati.appendChild(punti);

      fetch("aggiornaMatchPredatore.php?username=" + json[i].Predatore);
    }
    const eliminaPreda = document.createElement("button");
    eliminaPreda.textContent = "Logout";
    risultati.appendChild(eliminaPreda);
    eliminaPreda.onclick = function () {
      location.href = "logout.php";
    };
  } else {
    const noResults = document.createElement("h2");
    noResults.textContent = "Nessuna corrispondenza trovata";
    risultati.appendChild(noResults);
    const eliminaPreda = document.createElement("button");
    eliminaPreda.textContent = "Logout";
    risultati.appendChild(eliminaPreda);
    eliminaPreda.onclick = function () {
      location.href = "logout.php";
    };
  }
}

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
}
