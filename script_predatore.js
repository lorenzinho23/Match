function fetchResponse(response) {
  if (!response.ok) return null;
  return response.json();
}

function jsonCheckUsername(json) {
  // Controllo il campo exists ritornato dal JSON
  if ((formStatus.username = !json.exists)) {
    document.querySelector("#submit").disabled = true; // lo attiva
    formStatus.username = true;
  } else {
    alert("Username già utilizzato");
  }
  checkForm();
}

function checkUsername(event) {
  const input = event.currentTarget;
  const tipo_test = document.querySelector("#tipo_test");
  console.log("Sta giocando: " + tipo_test.textContent);

  fetch(
    "check_username.php?username=" +
      encodeURIComponent(input.value) +
      "&tipo=" +
      tipo_test
  )
    .then(fetchResponse)
    .then(jsonCheckUsername);
}

function checkNome(event) {
  const inputNome = event.currentTarget;
  console.log(inputNome.value);

  if (inputNome.value == "") {
    alert("Nome non definito");
    formStatus.nome = false;
  } else {
    formStatus.nome = true;
  }
  checkForm();
}

function checkCognome(event) {
  const inputCognome = event.currentTarget;
  console.log(inputCognome.value);

  if (inputCognome.value == "") {
    alert("Cognome non definito");
    formStatus.cognome = false;
  } else {
    formStatus.cognome = true;
  }
  checkForm();
}

function checkTavolo(event) {
  const inputTavolo = event.currentTarget;
  console.log(inputTavolo.value);

  if (inputTavolo.value == "null") {
    alert("Tavolo non definito");
    formStatus.tavolo = false;
  } else {
    formStatus.tavolo = true;
  }
  checkForm();
}

function checkSesso(event) {
  const inputSesso = event.currentTarget;
  console.log(inputSesso.value);

  if (inputSesso.value == "null") {
    alert("Sesso non definito");
    formStatus.sesso = false;
  } else {
    formStatus.sesso = true;
  }
  checkForm();
}

function checkGusto(event) {
  const inputGusto = event.currentTarget;
  console.log(inputGusto.value);

  if (inputGusto.value == "null") {
    alert("Gusto non definito");
    formStatus.gusto = false;
  } else {
    formStatus.gusto = true;
  }
  checkForm();
}

function checkCapelli(event) {
  const inputCapelli = event.currentTarget;
  console.log(inputCapelli.value);

  if (inputCapelli.value == "null") {
    alert("Capelli non definiti");
    formStatus.capelli = false;
  } else {
    formStatus.capelli = true;
  }
  checkForm();
}

function checkCarattere(event) {
  const inputCarattere = event.currentTarget;
  console.log(inputCarattere.value);

  if (inputCarattere.value == "null") {
    alert("Carattere non definito");
    formStatus.carattere = false;
  } else {
    formStatus.carattere = true;
  }
  checkForm();
}

function checkForm() {
  console.log(formStatus);
  // Controlla che tutti i campi siano pieni
  if (
    Object.keys(formStatus).length === 8 &&
    !Object.values(formStatus).includes(false)
  ) {
    document.querySelector("#submit").disabled = false;
  } else {
    document.querySelector("#submit").disabled = true;
  }
}

const formStatus = {};
document.querySelector("#nome").addEventListener("change", checkNome);
document.querySelector("#cognome").addEventListener("change", checkCognome);
document.querySelector("#username").addEventListener("change", checkUsername);
document
  .querySelector("#numero_tavolo")
  .addEventListener("change", checkTavolo);
document.querySelector("#sesso").addEventListener("change", checkSesso);
document.querySelector("#gusto").addEventListener("change", checkGusto);
document.querySelector("#capelli").addEventListener("change", checkCapelli);
document.querySelector("#carattere").addEventListener("change", checkCarattere);
