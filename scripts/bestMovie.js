// Sélectionne la section du meilleur film
const bestMovieSection = document.querySelector('.bestMovie-section');

// Sélectionne les éléments de la section du meilleur film
const bestMovieImage = bestMovieSection.querySelector('.bestMovie__image');
const bestMovieInfo = bestMovieSection.querySelector('.bestMovie__info');

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
       
      // Créer l'élément HTML pour l'image du film
      // const movieImage = document.createElement('img');
      // movieImage.src = movie.image_url;
      // movieImage.alt = movie.title;

      // // Ajouter l'image du film à la section du meilleur film
      // bestMovieImage.appendChild(movieImage);

    //   // Crée l'élément HTML pour les informations du film
    //   const movieInfo = document.createElement('div');
    //   movieInfo.innerHTML = `
    //   <h3>${movie.title}</h3>
    //   <p>Année : ${movie.year}</p>
    //   <p>Réalisateur : ${movie.directors}</p>
    //   <p>Acteurs : ${movie.actors ? movie.actors.join(', ') : 'N/A'}</p>
    //   <p>Score IMDb : ${movie.imdb_score}</p>
    //   <p>Genres : ${movie.genres ? movie.genres.join(', ') : 'N/A'}</p>
    //   <p>Pays : ${movie.countries ? movie.countries.join(', ') : 'N/A'}</p>
    // `;

    //   // Ajouter les informations du film à la section du meilleur film
    //   bestMovieSection.appendChild(movieInfo);
    } else {
      throw new Error('Une erreur s\'est produite lors de la récupération du meilleur film.');
    }
  } catch (error) {
    console.error(error);
  }
}

fetchBestMovie();
