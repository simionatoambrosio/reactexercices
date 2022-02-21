const contadorMinutos = 25;
let tempo = contadorMinutos * 60;

const CountdownEl = document.getElementById('countdown');

setInterval(attContador, 1000);

function attContador() {
    const minutos = Math.floor(tempo/60);
    let segundos = tempo % 60;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    CountdownEl.innerHTML = `${minutos}:${segundos}`;
    tempo--;

    console.log(tempo);
}