document.addEventListener('DOMContentLoaded', () => {
  let puntosA = 0;
  let puntosB = 0;
  let ganador = null;

  const btnJugadorA = document.getElementById('btnJugadorA');
  const btnJugadorB = document.getElementById('btnJugadorB');
  const puntosAJugador = document.getElementById('puntosA');
  const puntosBJugador = document.getElementById('puntosB');
  const ganadorDiv = document.getElementById('ganador');

  const aumentarPuntos = async (jugador) => {
    if (ganador) return;

    try {
      const response = await fetch(`http://localhost:4000/marcador`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ jugador })
      });
      const data = await response.json();

      if (response.ok) {
        if (jugador === 'A') {
          puntosA++;
          puntosAJugador.textContent = `Puntos Jugador A: ${puntosA}`;
        } else {
          puntosB++;
          puntosBJugador.textContent = `Puntos Jugador B: ${puntosB}`;
        }
      }

      if (puntosA >= 25 || puntosB >= 25 ) {
        ganador = puntosA > puntosB ? 'Jugador A' : 'Jugador B';
        ganadorDiv.textContent = `El ganador es: ${ganador}`;
      }
    } catch (error) {
      console.error('Error al aumentar puntos:', error);
    }
  };

  btnJugadorA.addEventListener('click', () => aumentarPuntos('A'));
  btnJugadorB.addEventListener('click', () => aumentarPuntos('B'));
  
});