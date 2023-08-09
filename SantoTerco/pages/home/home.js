// Passar dados para qual terço for

// Selecionar a div pelo id
const tercoMariano = document.getElementById('mariano');
const tercoMisericordia = document.getElementById('misericordia');
const tercoAmor = document.getElementById('amor');

// Função pra redirecionar
function redirecionarTercoMisericordia() {
  const data = {
    terco: 'Misericordia',
    id: 1
  };

  const queryString = new URLSearchParams(data).toString();
  const urlOutros = `../../pages/tercos/outros/outros.html?${queryString}`;
  window.location.href = urlOutros;
}

function redirecionarTercoAmor() {
  const data = {
    terco: 'Amor',
    id: 2
  };

  const queryString = new URLSearchParams(data).toString();
  const urlOutros = `../../pages/tercos/outros/outros.html?${queryString}`;
  window.location.href = urlOutros;
}

// Quando clicado...
tercoAmor.addEventListener('click', redirecionarTercoAmor);
tercoMisericordia.addEventListener('click', redirecionarTercoMisericordia);