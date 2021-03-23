const btnGenererRepas = document.getElementById('GenererRepas');

function generer() {
  const tableauSelect = document.getElementsByTagName('select');

  // je boucle sur chaque select
  for (let i = 0; i < tableauSelect.length; i += 1) {
    // je calcule un aleatoire entre 0 et la taille de mon select
    const myIndex = Math.floor(Math.random() * tableauSelect[i].length);

    // je boucle sur chaque element de mon tableau
    tableauSelect[i].selectedIndex = myIndex;
  }
}
// quand je clique sur le bouton, je lance la fonction Generer
btnGenererRepas.addEventListener('click', generer);
