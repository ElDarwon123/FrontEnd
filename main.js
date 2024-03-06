document.addEventListener('DOMContentLoaded', () => {
  // initialize the score for each team to 0
  let puntosEquipo1 = 0; 
  let puntosEquipo2 = 0; 
  // set the maximum score to win and the minimum difference needed to win
  const marcador = 25; 
  const diferenciaMinima = 2; 

  // get the buttons and score spans for each team, as well as the div for displaying the winner
  const btnEquipo1 = document.getElementById('btnEquipo1');
  const btnEquipo2 = document.getElementById('btnEquipo2');
  const puntosEquipo1Span = document.getElementById('puntosEquipo1');
  const puntosEquipo2Span = document.getElementById('puntosEquipo2');
  const ganadorDiv = document.getElementById('ganador');
  // this function increases the score for the given team
  const aumentarPuntos = (equipo) => {
    if (equipo === 'equipo1') {
      puntosEquipo1++; // increase the score for team 1
      puntosEquipo1Span.textContent = puntosEquipo1; // display the updated score for team 1
    } else {
      puntosEquipo2++;// increase the score for team 1
      puntosEquipo2Span.textContent = puntosEquipo2; // display the updated score for team 2
    }
// check if a team has reached the maximum score and if the difference is greater than or equal to the minimum difference
    if ((puntosEquipo1 >= marcador || puntosEquipo2 >= marcador) && Math.abs(puntosEquipo1 - puntosEquipo2) >= diferenciaMinima) {
      const ganador = puntosEquipo1 > puntosEquipo2 ? 'Equipo 1' : 'Equipo 2'; // determine the winning team
      ganadorDiv.textContent = `¡${ganador} ha ganado el partido!`; // display the winner
      btnEquipo1.disabled = true; // disable the buttons for both teams
      btnEquipo2.disabled = true;
    }
  };
// add event listeners to the buttons for each team to increase their score
  btnEquipo1.addEventListener('click', () => aumentarPuntos('equipo1'));
  btnEquipo2.addEventListener('click', () => aumentarPuntos('equipo2'));
});