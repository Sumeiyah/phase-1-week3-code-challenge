# phase-1-week3-code-challenge

# Flatdango movie theatre

This is a Movie Booking App, a JavaScript application that retrieves movie data from a JSON file and allows users to view movie details, select a movie, and buy tickets.

## Description

 
The flatdango movie theatre app  fetches movie data from a JSON file and displays movie details such as title, poster, runtime, showtime, available tickets, and description. Users can view the first movie's details upon page load and select a movie from the movie menu on the left side of the page. The number of available tickets is calculated based on the movie's capacity and tickets sold. Users can click the "Buy Ticket" button to purchase a ticket for the selected movie, and the available ticket count will decrease accordingly.

## Usage

1. Clone the repository:

   
   git clone <git@github.com:Sumeiyah/phase-1-week3-code-challenge.git>
   

2. Navigate to the project folder:

    cd phase-1-week3-code-challenge

     code . 

 3. Install json-server tool:

      npm install -g json-server

4. Run db.json file using the following command:
    
    json-server --watch db.json

5. 0pen the index.html file on the server and access it using the following URL:

bash

http://localhost:3000/characters

6. The application will send a GET request to the API endpoint to fetch the animal illustration data.

Once the data is fetched, the app will create HTML elements to display the animal illustrations on the page.  
   

7. Open the `index.html` file in your preferred web browser.

8. The movie details for the first movie will be displayed by default.

9. To select a different movie, click on the movie title in the movie menu on the left side of the page.

10. The movie details, including the movie poster, runtime, showtime, available tickets, and description, will be updated based on the selected movie.

11. To buy a ticket, click the "Buy Ticket" button. The available ticket count will decrease, and the button will be disabled if no more tickets are available.

## Technologies Used

- JavaScript
- HTML
- CSS
- json- provided in the assignment

## API Endpoint

The application fetches data from the following API endpoint:

API Endpoint: [http://localhost:3000/films]

## JSON Data

The movie data is fetched from the `films` array in the JSON file.

## Author

Author: Sumeya Farah.

## License

This project is licensed under the [MIT License](LICENSE).
