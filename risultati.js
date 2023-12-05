const body = document.querySelector("body");

// VERSIONE CON PULSANTE MOSTRATO ALL'ORA X CHE RIMANDA AI RISULTATI

const tipo = document.querySelector("#tipo").textContent;

window.onload = function surprise() {
  (function loop() {
    var now = new Date();
    if (
      // now.getDate() === 12 &&
      now.getHours() === 18 && // <---- CAMBIARE ORARIO QUAA <----
      now.getMinutes() === 55 //  <----- CAMBIARE ORARIO QUAA <----
    ) {
      const pulsanteRisultati = document.createElement("a");
      pulsanteRisultati.textContent = "RISULTATI PRONTI - CLICCA QUI";
      if (tipo == "preda") {
        pulsanteRisultati.setAttribute("href", "stampa_risultati_preda.php");
      } else if (tipo == "predatore") {
        pulsanteRisultati.setAttribute(
          "href",
          "stampa_risultati_predatore.php"
        );
      }
      body.appendChild(pulsanteRisultati);
    }
    now = new Date(); // allow for time passing
    var delay = 60000 - (now % 60000); // exact ms to next minute interval
    setTimeout(loop, delay);
  })();
};
