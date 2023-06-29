// Sélection des éléments html nécessaires
const openButton = document.querySelector('button[aria-haspopup="dialog"]');
const modal = document.getElementById('dialog');
const closeButton = modal.querySelector('button[data-dismiss="dialog"]');
const modalTitle = document.getElementById('dialog-title');
const modalGenres = document.getElementById('dialog-genres');
const modalReleaseDate = document.getElementById('dialog-releaseDate');
const modalVotes = document.getElementById('dialog-votes');
const modalImdbScore = document.getElementById('dialog-imdbScore');
const modalDirectors = document.getElementById('dialog-directors');
const modalActors = document.getElementById('dialog-actors');
const modalDuration = document.getElementById('dialog-duration');
const modalCountry = document.getElementById('dialog-country');
const modalBoxOfficeResult = document.getElementById('dialog-boxOfficeResult');
const modalPlot = document.getElementById('dialog-plot');
const modalImage = document.getElementById('dialog-image');

// Fonction pour ouvrir la fenêtre modale avec les informations du film
function openModal() {
  // Récupérer les informations du film à partir des attributs data de l'élément cliqué
  const title = this.dataset.title;
  const image_url = this.src ?? this.dataset.image_url ?? '../public/images/default.jpg';
  const genres = this.dataset.genres;
  const release_date = this.dataset.year;
  const votes = this.dataset.votes;
  const imdb_score = this.dataset.imdb_score;
  const directors = this.dataset.directors;
  const actors = this.dataset.actors;
  const duration = this.dataset.duration;
  const country = this.dataset.country;
  const boxoffice_result = this.dataset.boxoffice_result;
  const plot = this.dataset.plot;

  // Mettre à jour les éléments HTML de la fenêtre modale avec les informations du film
  modalImage.src = image_url;
  modalTitle.textContent = title;
  modalImage.src = image_url;
  // Ajout d'espaces entre les genres
  const genresList = genres.split(',').map(genre => genre.trim()).join(', ');
  modalGenres.textContent = genresList;
  modalReleaseDate.textContent = release_date;
  modalVotes.textContent = votes;
  modalImdbScore.textContent = imdb_score;
  modalDirectors.textContent = directors;

  // Ajouter des espaces après chaque virgule dans la liste des noms d'acteurs
  const actorsList = actors.split(',').map(actor => actor.trim()).join(', ');
  modalActors.textContent = actorsList;  
  modalDuration.textContent = duration;
  modalCountry.textContent = country;
  modalBoxOfficeResult.textContent = boxoffice_result;
  modalPlot.textContent = plot;

  modal.setAttribute('aria-hidden', 'false');
}

// Fonction pour fermer la fenêtre modale
function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
}

// Ajouter un écouteur d'événement pour ouvrir la fenêtre modale
openButton.addEventListener('click', openModal);

// Ajouter un écouteur d'événement pour fermer la fenêtre modale
closeButton.addEventListener('click', closeModal);
