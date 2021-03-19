const btnGenererRepas = document.getElementById('GenererRepas');

function generer() {
  const tableauSelect = document.getElementsByTagName('select');

  // je boucle sur chaque element de mon tableau
  // pour chaque select dans mon tableau

  for (let i = 0; i < tableauSelect.length; i++) {
    // je cherche la taille de mon select
    console.log(tableauSelect[i].length);

    // je calcul un aleatoire entre 1 et la taille de mon select
    let legIndex = Math.floor(Math.random() * tableauSelect.length) + 1;
    console.log(legIndex);
    let fruIndex = Math.floor(Math.random() * tableauSelect.length) + 1;
    console.log(fruIndex);
    let proIndex = Math.floor(Math.random() * tableauSelect.length) + 1;
    console.log(proIndex);
    let desIndex = Math.floor(Math.random() * tableauSelect.length) + 1;
    console.log(desIndex);
    let froIndex = Math.floor(Math.random() * tableauSelect.length) + 1;
    console.log(froIndex);
    let fecIndex = Math.floor(Math.random() * tableauSelect.length) + 1;
    console.log(fecIndex);
  }
    // je selection l'item correspondant a cet aleatoire.

  /* let legIndex = Math.floor(Math.random() * select.length) + 1;
    console.log(legIndex);
    let fruIndex = Math.floor(Math.random() * select.length) + 1;
    console.log(fruIndex);
    let proIndex = Math.floor(Math.random() * select.length) + 1;
    console.log(proIndex);
    let desIndex = Math.floor(Math.random() * select.length) + 1;
    console.log(desIndex);
    let froIndex = Math.floor(Math.random() * select.length) + 1;
    console.log(froIndex);
    let fecIndex = Math.floor(Math.random() * select.length) + 1;
    console.log(fecIndex); */

/* Math.floor(Math.random() * select.length) + 1;

 */