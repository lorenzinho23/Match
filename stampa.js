const tipo = document.querySelector("#tipo").textContent;
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
  // UNA FETCH SOLA IN CUI METTO IL TIPO (preda/predatore) E QUINDI UN SOLO FILE PHP
  const fetch_calcolo =
    "calcolo_risultati.php?tipo=" +
    tipo +
    "&username=" +
    username +
    "&sesso=" +
    sesso +
    "&gusto=" +
    gusto +
    "&capelli=" +
    capelli +
    "&carattere=" +
    carattere;

  fetch(fetch_calcolo).then(onResponse).then(onJSONRisultati);
};

function onResponse(response) {
  return response.json();
}

function onJSONRisultati(json) {
  console.log(json);
  if (json[0].length !== 0) {
    const risultati = document.querySelector("#risultati");

    if (tipo == "preda") {
      for (let i = 0; i < json.length; i++) {
        const nomePredatore = document.createElement("h2");
        nomePredatore.textContent =
          [i + 1] + "°) Username:" + json[i].Predatore;
        const numero_tavolo = document.createElement("h2");
        numero_tavolo.textContent = "Numero tavolo:" + json[i].numero_tavolo;
        const punti = document.createElement("h3");
        punti.textContent =
          "Compatibilità:" + Math.round((json[i].Punti / 2) * 100) + "%";
        risultati.appendChild(nomePredatore);
        risultati.appendChild(numero_tavolo);
        risultati.appendChild(punti);

        fetch(
          "aggiornaMatch.php?username=" + json[i].Predatore + "&tipo=" + tipo
        );
      }
      const eliminaPreda = document.createElement("button");
      eliminaPreda.textContent = "Logout";
      risultati.appendChild(eliminaPreda);
      eliminaPreda.onclick = function () {
        location.href = "logout.php";
      };
    } else if (tipo == "predatore") {
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

        fetch("aggiornaMatch.php?username=" + json[i].Preda + "&tipo=" + tipo);
      }
      const eliminaPredatore = document.createElement("button");
      eliminaPredatore.textContent = "Logout";
      risultati.appendChild(eliminaPredatore);
      eliminaPredatore.onclick = function () {
        location.href = "logout.php";
      };
    }
  } else {
    const noResults = document.createElement("h2");
    noResults.textContent =
      "Nessuna corrispondenza trovata, ma non demordere: puoi riprovare tra poco!";
    risultati.appendChild(noResults);
    const aggiorna = document.querySelector("#aggiorna");
    aggiorna.removeAttribute("style");
    aggiorna.onclick = function () {
      location.reload();
    };
  }
}
