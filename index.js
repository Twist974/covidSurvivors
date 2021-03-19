const btnGenererRepas = document.querySelector("#GénérerRepas");

function Generer() {
    let legIndex = Math.floor(Math.random() * 7) + 1;
    console.log(legIndex);
    let fruIndex = Math.floor(Math.random() * 7) + 1;
    console.log(fruIndex);
    let proIndex = Math.floor(Math.random() * 7) + 1;
    console.log(proIndex);
    let desIndex = Math.floor(Math.random() * 7) + 1;
    console.log(desIndex);
    let froIndex = Math.floor(Math.random() * 7) + 1;
    console.log(froIndex);
    let fecIndex = Math.floor(Math.random() * 7) + 1;
    console.log(fecIndex);
}

btnGenererRepas.addEventListener('click', function(){
    Generer()
});