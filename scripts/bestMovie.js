// Sélectionne la section du meilleur film
const bestMovieSection = document.querySelector('.bestMovie-section');

// Sélectionne les éléments de la section du meilleur film
const bestMovieImage = bestMovieSection.querySelector('.bestMovie__image');
// const bestMovieInfo = bestMovieSection.querySelector('.bestMovie__info');

// Fonction asynchrone pour récupérer le meilleur film
async function fetchBestMovie() {
  try {
    let url = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&limit=1';

    // Effectue la requête pour récupérer le meilleur film
    const response = await fetch(url);
    const data = await response.json();

    // Vérifie si la requête a réussi
    if (response.ok) {
      const movie = data.results[0];

      // Modifier le style de l'image du meilleur film
      bestMovieImage.style.backgroundImage = `url('${movie.image_url}')`;
      bestMovieImage.style.backgroundSize = 'cover';
      bestMovieImage.style.backgroundPosition = 'center';

      // Ajouter les attributs data pour chaque information du film
      bestMovieImage.dataset.image_url = movie.image_url;
      bestMovieImage.dataset.title = movie.title;
      bestMovieImage.dataset.genres = movie.genres;
      bestMovieImage.dataset.year = movie.year;
      bestMovieImage.dataset.votes = movie.votes;
      bestMovieImage.dataset.imdb_score = movie.imdb_score;
      bestMovieImage.dataset.directors = movie.directors;
      bestMovieImage.dataset.actors = movie.actors;
      bestMovieImage.dataset.duration = movie.duration ?? "non communiqué";
      bestMovieImage.dataset.country = movie.country ?? "non communiqué";
      bestMovieImage.dataset.boxoffice_result = movie.boxoffice_result ?? "non communiqué";
      bestMovieImage.dataset.plot = movie.plot ?? "non communiqué";

      bestMovieImage.addEventListener("click", openModal)

    } else {
      throw new Error('Une erreur s\'est produite lors de la récupération du meilleur film.');
    }
  } catch (error) {
    console.error(error);
  }
}

fetchBestMovie();
