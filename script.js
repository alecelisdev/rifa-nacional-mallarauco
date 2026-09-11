(function () {
  const setupScreen = document.getElementById('setup-screen');
  const drawScreen = document.getElementById('draw-screen');
  const setupForm = document.getElementById('setup-form');
  const totalInput = document.getElementById('total-input');
  const setupError = document.getElementById('setup-error');
  const totalDisplay = document.getElementById('total-display');
  const resultCard = document.getElementById('result-card');
  const resultTag = document.getElementById('result-tag');
  const resultNumber = document.getElementById('result-number');
  const btnGanador = document.getElementById('btn-ganador');
  const btnAgua = document.getElementById('btn-agua');
  const btnReset = document.getElementById('btn-reset');

  let total = 0;

  function drawNumber(total) {
    return Math.floor(Math.random() * total) + 1;
  }

  function showResult(label, value) {
    resultTag.textContent = label;
    resultNumber.textContent = value;
    resultCard.hidden = false;
  }

  setupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = parseInt(totalInput.value, 10);

    if (!Number.isInteger(value) || value < 1) {
      setupError.textContent = 'Ingresa un número válido mayor a 0.';
      setupError.hidden = false;
      return;
    }

    setupError.hidden = true;
    total = value;
    totalDisplay.textContent = total;
    resultCard.hidden = true;
    setupScreen.hidden = true;
    drawScreen.hidden = false;
  });

  btnGanador.addEventListener('click', function () {
    showResult('Número Ganador', drawNumber(total));
  });

  btnAgua.addEventListener('click', function () {
    showResult('Número al Agua', drawNumber(total));
  });

  btnReset.addEventListener('click', function () {
    drawScreen.hidden = true;
    resultCard.hidden = true;
    setupScreen.hidden = false;
    totalInput.value = '';
    totalInput.focus();
  });
})();
