// Sélectionner la galerie des films d'action
const actionGallery = document.querySelector('.action-movies');

// Fonction asynchrone pour récupérer les films d'action
async function fetchActionMovies() {
  try {
    let url = 'http://localhost:8000/api/v1/titles/?genre_contains=action&sort_by=-imdb_score';
    let movies = [];

    while (movies.length < 14) {
      // Effectuer la requête pour récupérer les films d'action
      const response = await fetch(url);
      const data = await response.json();

      // Vérifier si la requête a réussi
      if (response.ok) {
        const results = data.results;

        // Ajouter les films à la liste des films récupérés
        movies = movies.concat(results);

        // Vérifier s'il y a une page suivante
        if (data.next) {
          url = data.next;
        } else {
          break; // Sortir de la boucle si on a atteint la dernière page
        }
      } else {
        throw new Error('Une erreur s\'est produite lors de la récupération des films d\'action.');
      }
    }

    // Limiter le nombre de films à afficher à 14
    movies = movies.slice(0, 14);

    // Générer les éléments HTML pour chaque film et les ajouter à la galerie
    movies.forEach((movie) => {
      const movieImage = document.createElement('img');

      movieImage.src = movie.image_url;
      movieImage.alt = movie.title;
      movieImage.classList.add('gallery__liste__films');
      
      // Ajouter les attributs data pour chaque information du film
      movieImage.dataset.title = movie.title;
      movieImage.dataset.genres = movie.genres;
      movieImage.dataset.year = movie.year;
      movieImage.dataset.votes = movie.votes;
      movieImage.dataset.imdb_score = movie.imdb_score;
      movieImage.dataset.directors = movie.directors;
      movieImage.dataset.actors = movie.actors;
      movieImage.dataset.duration = movie.duration ?? "non communiqué";
      movieImage.dataset.country = movie.country ?? "non communiqué";
      movieImage.dataset.boxoffice_result = movie.boxoffice_result ?? "non communiqué";
      movieImage.dataset.plot = movie.plot ?? "non communiqué";

      // Ajout d'un écouteur d'événements "click" pour ouvrir la fenêtre modale
      movieImage.addEventListener('click', openModal)

      actionGallery.appendChild(movieImage);
 
    });
  } catch (error) {
    console.error(error);
  }
}

fetchActionMovies();
