// Sélectionner la galerie des films d'animation
const animationGallery = document.querySelector('.animation-movies');

// Fonction asynchrone pour récupérer les films d'animation
async function fetchAnimationMovies() {
  try {
    let url = 'http://localhost:8000/api/v1/titles/?genre_contains=animation&sort_by=-imdb_score';
    let movies = [];

    while (movies.length < 14) {
      // Effectuer la requête pour récupérer les films d'animation
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
        throw new Error('Une erreur s\'est produite lors de la récupération des films d\'animation.');
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

      animationGallery.appendChild(movieImage);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchAnimationMovies();
