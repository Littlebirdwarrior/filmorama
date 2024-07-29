
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
 * Je récupère la valeur de mon input
 * TODO : à sécuriser
 * @param form 
 * @param search 
 */
function setupSearch(form: HTMLFormElement, search: HTMLInputElement) {
    // Ajoutez un écouteur d'événement pour la soumission du formulaire
    form.addEventListener("submit", function(event: Event) {
        event.preventDefault();
        // Récupérez la valeur de l'input
        let inputValue: string = search.value;
        // Par exemple, afficher la valeur dans une alerte
        console.log(inputValue);
    });
}

/**
 * 
 */





/**
 * injection du code au chargement de la page
*/
document.addEventListener("DOMContentLoaded", function() {

    // Récupérer l'id du formulaire
    const form = document.getElementById("form") as HTMLFormElement;
    // Récupérer la valeur de l'input
    const search = document.getElementById("search") as HTMLInputElement;

    if (form && search) {
        setupSearch(form, search);
    } else {
        console.error("Le formulaire ou l'input n'a pas pu être trouvé dans le DOM.");
    }
});
