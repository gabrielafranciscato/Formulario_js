document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio do formulário

  var campoA = parseInt(document.getElementById('campoA').value);
  var campoB = parseInt(document.getElementById('campoB').value);

  if (campoB > campoA) {
    alert("Formulário válido!");
  } else {
    alert("Tente novamente, o número B deve ser maior que o número A!");
  }
});
