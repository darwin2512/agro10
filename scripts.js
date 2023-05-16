const form = document.querySelector('form');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const distanciaPlantas = parseFloat(form.elements['distancia-plantas'].value);
  const distanciaFilas = parseFloat(form.elements['distancia-filas'].value);
  const areaSiembra = parseFloat(form.elements['area-siembra'].value);
  
  const plantasPorMetroCuadrado = 1 / (distanciaPlantas * distanciaFilas);
  const densidadSiembra = plantasPorMetroCuadrado * areaSiembra;
  
  resultado.textContent = `La densidad de siembra es de ${densidadSiembra.toFixed(2)} plantas por metro cuadrado.`;
});
