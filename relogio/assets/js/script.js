const horas = document.getElementById("hora");
const minutos = document.getElementById("minuto");
const segundos = document.getElementById("segundo");

const relogio = setInterval( () => {
    let dia = new Date(), hr, min, sec;

    hr = dia.getHours();
    min = dia.getMinutes();
    sec = dia.getSeconds();

    horas.innerHTML = hr<=10 ? "0"+hr: hr;
    minutos.innerHTML = min<=10 ? "0"+min: min;
    segundos.innerHTML = sec<=10 ? "0"+sec: sec;
});