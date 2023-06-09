# Sweet Dee's Movie Db (SDMdB)

Phase-2 Project- DEN-SE-05123 cohort 

Sweet Dee's Movie Db is a React application that collects movie details from the Open Movie database API. It then creates a list of 10 movies on the home page to start as suggestions to my dog, Sweet Dee (She is quite the cinephile). 

From the Home page,  she can navigate from the NavBar atop the page to either the "Add a Movie" or "Favorites" page. I also put in a Search/Filter feature that can filter the list of movies depending on the title. 

She can navigate to an "Add Movie" page where she or others can add movies via IMDb links that will then add to the list of 10. 

She can then add the ones that are her favorite on a  "Favorites" page and remove them if she likes. 
She can remove them from the Home page by clicking the "Add to Favorites" button and toggling "Remove from Favorites." This function removes the movie from the "Favorites" page. That's it for now, but I am already thinking and working on some additional fun deliverables and welcome any suggestions!  

## Setup

1. Run `npm install` in your terminal (make sure you are cd'd into the SweetDeeMovieDB).
2. Run `npm run dev`. This will run the localhost for the React app.
3. In a new terminal, run `npm run db` in SweerDeeMoiveDB This will run the back-end json db that holds the movies added as well as favorites.  

# Axios 

I used the Axios library, a new feature for me since I started programming. Axios is a popular JS library that simplifies making HTTP requests from browsers and Node.js applications. It provides an easy-to-use and promise-based API to make HTTP requests allowing users to send and receive data from servers with little effort. Axios supports multiple features like interceptors for request and response handling, automatic request cancellation, and built-in support for handling requests and response data in JSON format. It was a crucial tool for this project, enabling me to work seamlessly with APIs like OMdb and communication with the server. 