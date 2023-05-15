// Variables globales
let currentResult = '';  // Resultado actual

// Función para agregar un carácter al resultado actual
function appendCharacter(character) {
  currentResult += character;
  document.getElementById('result').value = currentResult;
}

// Función para borrar el último carácter del resultado actual
function deleteLastCharacter() {
  currentResult = currentResult.slice(0, -1);
  document.getElementById('result').value = currentResult;
}

// Función para borrar completamente el resultado actual
function clearResult() {
  currentResult = '';
  document.getElementById('result').value = currentResult;
}

// Función para calcular el resultado final
function calculateResult() {
  const result = eval(currentResult);
  document.getElementById('result').value = result;
  currentResult = result.toString();
}

// Evento para capturar las teclas presionadas
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

  if (allowedKeys.includes(key)) {
    event.preventDefault();

    switch (key) {
      case 'Enter':
        calculateResult();
        break;
      case 'Backspace':
        deleteLastCharacter();
        break;
      default:
        appendCharacter(key);
        break;
    }
  }
});

