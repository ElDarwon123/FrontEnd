document.addEventListener('DOMContentLoaded', () => {
  let puntosEquipo1 = 0;
  let puntosEquipo2 = 0;
  const marcador = 25; // Puntos máximos para ganar
  const diferenciaMinima = 2; // Diferencia mínima para ganar

  const btnEquipo1 = document.getElementById('btnEquipo1');
  const btnEquipo2 = document.getElementById('btnEquipo2');
  const puntosEquipo1Span = document.getElementById('puntosEquipo1');
  const puntosEquipo2Span = document.getElementById('puntosEquipo2');
  const ganadorDiv = document.getElementById('ganador');

  const aumentarPuntos = (equipo) => {
    if (equipo === 'equipo1') {
      puntosEquipo1++;
      puntosEquipo1Span.textContent = puntosEquipo1;
    } else {
      puntosEquipo2++;
      puntosEquipo2Span.textContent = puntosEquipo2;
    }

    if ((puntosEquipo1 >= marcador || puntosEquipo2 >= marcador) && Math.abs(puntosEquipo1 - puntosEquipo2) >= diferenciaMinima) {
      const ganador = puntosEquipo1 > puntosEquipo2 ? 'Equipo 1' : 'Equipo 2';
      ganadorDiv.textContent = `¡${ganador} ha ganado el partido!`;
      btnEquipo1.disabled = true;
      btnEquipo2.disabled = true;
    }
  };

  btnEquipo1.addEventListener('click', () => aumentarPuntos('equipo1'));
  btnEquipo2.addEventListener('click', () => aumentarPuntos('equipo2'));
});