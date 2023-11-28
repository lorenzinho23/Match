const risultati = JSON.parse(sessionStorage.getItem("arrayRisultati"));
console.log(risultati);
const box = document.querySelector("#risultati");

for (let i = 0; i < risultati.length; i++) {
  const nomePredatore = document.createElement("h2");
  nomePredatore.textContent = [i + 1] + "°) Username:" + risultati[i].Predatore;
  const numero_tavolo = document.createElement("h2");
  numero_tavolo.textContent = "Numero tavolo:" + risultati[i].numero_tavolo;
  const punti = document.createElement("h3");
  punti.textContent =
    "Compatibilità:" + Math.round((risultati[i].Punti / 2) * 100) + "%";
  box.appendChild(nomePredatore);
  box.appendChild(numero_tavolo);
  box.appendChild(punti);

  fetch("aggiornaMatchPredatore.php?username=" + risultati[i].Predatore);
}
const eliminaPreda = document.createElement("button");
eliminaPreda.textContent = "Logout";
box.appendChild(eliminaPreda);
eliminaPreda.onclick = function () {
  location.href = "logout.php";
};
