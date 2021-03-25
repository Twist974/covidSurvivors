/* 1 -- SCROLL */
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add('active');
  } else {
    toTop.classList.remove('active');
  }
});

/* 2 -- HABITUDES ALIMENTAIRES : GENERATEUR DE REPAS */

// Je crée une variable en fonction du bouton GenererRepas
const btnGenererRepas = document.getElementById('GenererRepas');

// Je crée une fonction pour sélectionner les éléments de mes selects
function generer() {
  const tableauSelect = document.getElementsByTagName('select');

  // je boucle sur chaque select
  for (let i = 0; i < tableauSelect.length; i += 1) {
    // je calcule un aleatoire entre 0 et la taille de mon select
    const myIndex = Math.floor(Math.random() * tableauSelect[i].length);

    // je sélectionne un item en fonction du chiffre aléatoire
    tableauSelect[i].selectedIndex = myIndex;

    // j'affiche le résultat de la fonction générer dans le texte HTML
    const choiceSpan = document.getElementsByClassName('show-choice');
    choiceSpan[i].innerHTML = tableauSelect[i].value;
  }
}
// quand je clique sur le bouton, je lance la fonction generer
btnGenererRepas.addEventListener('click', generer);
