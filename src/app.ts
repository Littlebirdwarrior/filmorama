/**
 *  Étape 1: recuperer le texte compris dans le label *
 *
 *  Sources : https://www.typescriptlang.org/docs/handbook/dom-manipulation.html
 *  https://developer.mozilla.org/fr/docs/Learn/Forms/Sending_and_retrieving_form_data
 *
 *  Étape 2: utiliser l'api et récupérer des objets *
 * 
 *  Étape 3: passer une requete personnalisée à partir de l'input
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


async function fetchData(query : string) {

  console.log('query', query);//ok

  const apiUrl = "https://freetestapi.com/api/v1/movies";
  //encodeURIComponent : filtre les input et échappe les charactère
  //ternaine, si query existe, filtrer, sinon vide
  const searchQuery = query ? "?search=" + encodeURIComponent(query) : "";
  const url = apiUrl + searchQuery;

  console.log('url', url);//ok

  // Faire l'appel à l'API
  const response = await fetch(url);
    
  // Vérifiez si la réponse est correcte
  if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données');
  }

  try {
    // Convertir la promise en JSON si elle est fullfiled: 
    let movies : Movie[] = await response.json();
    console.log('json', movies.length)//ok
    //je verifie que mon array est bien un tableau et n'est pas vide
    if(Array.isArray(movies) && movies.length !== 0){
      //Grace à une boucle forE, j'affiche les paramètre de chaque objet
      return movies
    } else {
      console.error( `no movies for: ${query} `);
    }

  } catch(error) {
    throw new Error( "failed fetch of the movies");
  }

}

/**
 * 
 * 
 */

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer l'id du formulaire
  const form = document.getElementById("form") as HTMLFormElement;
  // Récupérer la valeur de l'input
  const search = document.getElementById("search") as HTMLInputElement;
  // Récupérer l'id de l'input
  const resultDisplay = document.getElementById("result") as HTMLElement;

  //Fonctionnement formulaire
  if (form && search) {
    
    // Ajoutez un écouteur d'événement pour la soumission du formulaire
    form.addEventListener("submit", function (event: Event) {

    //eviter le refresh page
    event.preventDefault();

    // Récupérez la valeur de l'input
    let inputValue: string = search.value;

    //Je récupère mes données
    let result = fetchData(inputValue);
    console.log(result);

    //J'affiche mes données

    //console.log(display);

  })
  } else {
    console.error(
      "Le formulaire ou l'input n'a pas pu être trouvé dans le DOM."
    );
  }

});
