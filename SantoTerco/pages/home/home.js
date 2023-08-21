// Identificar se está no mobile

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  function detectMobileDevice() {
      if (/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true; // eh um dispositivo móvel
      } else {
          return false; // não eh um dispositivo móvel
      }
  }
  
  if (detectMobileDevice()) {
    const tercoMariano = document.querySelector('.terco-mariano');
    tercoMariano.classList.remove('displaya');

    tercoMariano.addEventListener('mouseenter', function() {
      setTimeout(function() {
        tercoMariano.classList.add('hide-content');
      }, 500); // Atraso de 1s
    });

    tercoMariano.addEventListener('mouseleave', function() {
      tercoMariano.classList.remove('hide-content');
    });
  }
  
}

// Passar dados para qual terço for

// Selecionar a div pelo id
const misteriosGozosos = document.getElementById('gozosos');
const misteriosDolorosos = document.getElementById('dolorosos');
const misteriosLuminosos = document.getElementById('luminosos');
const misteriosGloriosos = document.getElementById('gloriosos');
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

// Função pra redirecionar
function redirecionarMisteriosGozosos() {
  const dataMisterio = {
    misterio: 'Gosozos',
    id: 1
  };

  const queryString = new URLSearchParams(dataMisterio).toString();
  const urlMariano = `../../pages/tercos/mariano/mariano.html?${queryString}`;
  window.location.href = urlMariano;
}

function redirecionarMisteriosDolorosos() {
  const dataMisterio = {
    misterio: 'Dolorosos',
    id: 2
  };

  const queryString = new URLSearchParams(dataMisterio).toString();
  const urlMariano = `../../pages/tercos/mariano/mariano.html?${queryString}`;
  window.location.href = urlMariano;
}

function redirecionarMisteriosLuminosos() {
  const dataMisterio = {
    misterio: 'Luminosos',
    id: 3
  };

  const queryString = new URLSearchParams(dataMisterio).toString();
  const urlMariano = `../../pages/tercos/mariano/mariano.html?${queryString}`;
  window.location.href = urlMariano;
}

function redirecionarMisteriosGloriosos() {
  const dataMisterio = {
    misterio: 'Gloriosos',
    id: 4
  };

  const queryString = new URLSearchParams(dataMisterio).toString();
  const urlMariano = `../../pages/tercos/mariano/mariano.html?${queryString}`;
  window.location.href = urlMariano;
}

// Quando clicado...
misteriosGozosos.addEventListener('click', redirecionarMisteriosGozosos);
misteriosDolorosos.addEventListener('click', redirecionarMisteriosDolorosos);
misteriosLuminosos.addEventListener('click', redirecionarMisteriosLuminosos);
misteriosGloriosos.addEventListener('click', redirecionarMisteriosGloriosos);
tercoAmor.addEventListener('click', redirecionarTercoAmor);
tercoMisericordia.addEventListener('click', redirecionarTercoMisericordia);