const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i=0;i<botoes.length;i++){
    botoes[i].onclick = function(){
for(let j=0;j<botoes.length;j++){
    botoes[j].classList.remove("ativo");
    textos[j].classList.remove("ativo");

}
botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2023-10-05T00:00:00");
const tempoObjetivo2 = new Date ("2023-12-05t00:00:00");
const tempoObjetivo3 = new Date ("2023-12-30t00:00:00");
const tempoObjetivo4 = new Date ("2024-02-01t00:00:00"); 

contadores [0].textContent = calculaTempo(tempoObjetivo1);
const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];
function calculaTempo(tempoObjetivo1){
    let tempoAtual = newDate();
let tempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dia = Math.floor(horas/24);

segundos %= 60;
minutos %= 60;
horas %= 24;

if (tempoFinal > 0){
    return dias + " dias " + horas + "horas" + minutos + "minutos" + segundos + "segundos";
    } else{
        
    }
}