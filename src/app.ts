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
 *  
 *  Étapes 6: refactor
 *  - recupérer valeur input
 *  - fetch
 *  - display (séparer affichage de recupération)
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
/**
 * Récupère les informations à partir de l'api https://freetestapi.com
 * @param query
 * @returns string 
 */

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
    // console.log('json', movies.length)//ok
    //je verifie que mon array est bien un tableau et n'est pas vide
    if(Array.isArray(movies) && movies.length !== 0){
      //Grace à une boucle forE, j'affiche les paramètre de chaque objet
      //console.log(movies);
      return movies

    } else {
      //une fonction ne retourne pas des type différent
      console.error( `no movies for: ${query} `);
      return [];
    }

  } catch(error) {
    throw new Error( "failed fetch of the movies");
  }

}

/**
 * Affiche les données récupérée dans le main HTML
 * @param inputValue 
 */

async function displayData(inputValue: string) {
    try {
        const resultDisplay = document.getElementById("resultDisplay") as HTMLElement; // Récupérer l'id de l'input
        
        if (!resultDisplay) {
            throw new Error("Élément avec l'ID 'resultDisplay' non trouvé.");
        }
        
        // Attente de la résolution de la promesse fetchData
        const result = await fetchData(inputValue);

        // Mise à jour du contenu de l'élément <p>
          let display: string = "";

          if(!result.length){
            display = "Caramba, encore raté";
          }

          result.forEach(movie => {
            display +=
            `<div class="movie">
              <h3 class="movie-title">${movie.title}</h3>
              <p class="movie-rating">${movie.rating}</p>
              <img class="movie-img" src="${movie.poster}" alt="affiche du film ${movie.title}"/>
              <ul class="movie-list">
                <li><span>Year : </span>${movie.year}</li>
                <li><span>Genre : </span>${movie.genre}</li>
                <li><span>Director : </span>${movie.director}</li>
                <li><span>Awards : </span>${movie.awards}</li>
                <li><span>language : </span>${movie.language}</li>
                <li><span>Runtime : </span>${movie.runtime} min</li>
              </ul>
              <p class="movie-actors"><span>Actors</span>${movie.actors}</p>
              <p class="movie-plot"><span>Actors</span>${movie.plot}</p>
              <a class="movie-trailer"href="https://www.youtube.com/watch?${movie.title}">Go to trailer</a>
              <a class="movie-website"href="${movie.website}">Learn more on the web</a>
            </div>`
          });
    
            resultDisplay.innerHTML= display;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
    }
}

/**
 * Déclanche l'action à la submission du formulaire
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mon dom ne change pas, mon formumlaire est toujours là (pas besoin de rechercher à chaque fois)
  // Récupérer l'id du formulaire
  const form = document.getElementById("form") as HTMLFormElement;
  // Récupérer la valeur de l'input
  const search = document.getElementById("search") as HTMLInputElement;

  //Fonctionnement formulaire<li></li>
  if (form && search) {
    
    // Ajoutez un écouteur d'événement pour la soumission du formulaire
    form.addEventListener("submit", (event: Event) => {

    //eviter le refresh page
    event.preventDefault();

    // Récupérez la valeur de l'input
    let inputValue: string = search.value;

    //J'affiche mes données
    displayData(inputValue);    

  })
  } else {
    console.error(
      "Le formulaire ou l'input n'a pas pu être trouvé dans le DOM."
    );
  }

});