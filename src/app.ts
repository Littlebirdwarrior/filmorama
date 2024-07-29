/**
 *  Étape 1: recuperer le texte compris dans le label
 *
 *  Sources : https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
 *  https://developer.mozilla.org/fr/docs/Learn/Forms/Sending_and_retrieving_form_data
 *
 *  Étape 2: utiliser l'api et récupérer des objets
 *
 *  Étape 3: afficher les objets dans des cards dynamiques
 *
 *  Étapes 4: créer un filtre qui permet de rechercher les bons objets dans l'API
 *
 *  Étapes 5, réinitialiser le filtre
 */


/**
 * Objet films
 */

type Movie = {
  id:    number,
  title:    string,
  year:    number,
  genre:    string,
  rating:    number,
  director:    string,
  actors:    string[],
  plot:    string,
  poster:    string,
  trailer:    string,
  runtime:    number,
  awards:    string,
  country:    string,
  language:    string,
  boxOffice:    string,
  production:    string,
  website:    string

}


async function fetchData() {
  try {
      // Faire l'appel à l'API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Vérifiez si la réponse est correcte
      if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
      }
      // Convertir la promise en JSON si elle est fullfiled
      const dataJson = await response.json();
      //
      return dataJson;

  } catch (error) {
      // Gérer les erreurs éventuelles
      console.error('Erreur:', error);
  }
}

// Fonction pour afficher les films
async function displayData() {
    try {
        //je recupère un json que j'assigne comme un tableau d'objet
        const movies: Movie[] = await fetchData();

        //Grace à une boucle forE, j'affiche les paramètre de chaque objet
        movies.forEach(movie => {
          console.log(`ID: ${movie.id}, Title: ${movie.title}, Year: ${movie.year}, Genre: ${movie.genre}`);
        });
    } catch (error) {
        console.error("Erreur lors de l'affichage", error);
    }
}


/**
 * Je récupère la valeur de mon input
 * TODO : à sécuriser
 * @param form
 * @param search
 */
function setupSearch(form: HTMLFormElement, search: HTMLInputElement) {
  // Ajoutez un écouteur d'événement pour la soumission du formulaire
  form.addEventListener("submit", function (event: Event) {
    event.preventDefault();
    // Récupérez la valeur de l'input
    let inputValue: string = search.value;
    // Par exemple, afficher la valeur dans une alerte
    //console.log(inputValue);

    // Récupérer mes données
    console.log("dataJson", displayData());
    
    return inputValue;
  });
}

/**
 * injection du code au chargement de la page
 */
document.addEventListener("DOMContentLoaded", function () {
  // Récupérer l'id du formulaire
  const form = document.getElementById("form") as HTMLFormElement;
  // Récupérer la valeur de l'input
  const search = document.getElementById("search") as HTMLInputElement;
  
  //Fonctionnement formulaire
  if (form && search) {
    setupSearch(form, search);
  } else {
    console.error(
      "Le formulaire ou l'input n'a pas pu être trouvé dans le DOM."
    );
  }

});
