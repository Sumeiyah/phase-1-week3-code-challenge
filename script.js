function fetchMovies() {
    return fetch('db.json')
      .then(function(response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error fetching movies. Status: ' + response.status);
        }
      })
      .then(function(data) {
        return data.films;
      })
      .catch(function(error) {
        console.error('Error fetching movies:', error);
        return [];
      });
  }
  
  function updateMovieDetails(movie) {
    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-poster').src = movie.poster;
    document.getElementById('movie-description').textContent = movie.description;
    document.getElementById('movie-runtime').textContent = movie.runtime;
    document.getElementById('movie-showtime').textContent = movie.showtime;
    const availableTickets = movie.capacity - movie.tickets_sold;
    document.getElementById('movie-available-tickets').textContent = availableTickets;
    document.getElementById('buy-ticket-btn').disabled = availableTickets === 0;
  }
  
  function populateFilmMenu(films) {
    const filmsList = document.getElementById('films');
  
    films.forEach(function(film) {
      const filmItem = document.createElement('li');
      filmItem.textContent = film.title;
      filmItem.addEventListener('click', function() {
        updateMovieDetails(film);
      });
      filmsList.appendChild(filmItem);
    });
  }
  
  function buyTicket() {
    const availableTicketsElement = document.getElementById('movie-available-tickets');
    let availableTickets = parseInt(availableTicketsElement.textContent);
  
    if (availableTickets > 0) {
      availableTickets--;
      availableTicketsElement.textContent = availableTickets;
      document.getElementById('buy-ticket-btn').disabled = availableTickets === 0;
    }
  }
  
  function initializePage() {
    fetchMovies()
      .then(function(movies) {
        if (movies.length > 0) {
          updateMovieDetails(movies[0]);
          populateFilmMenu(movies);
          document.getElementById('buy-ticket-btn').addEventListener('click', buyTicket);
        }
      });
  }
  
  initializePage();
  