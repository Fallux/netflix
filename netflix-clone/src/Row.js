// gebasseerd op deze tutorial: https://www.youtube.com/watch?v=XtMThy8QKqU
import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
//trailers toevoegen niet gelukt door upgraded webpack v5 (zie screenshot)
// bronnen die ik heb geprobeerd om de errors weg te krijgen
// polyfill error:
//https://blog.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5
//https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
//https://webpack.js.org/migrate/5/#clean-up-configuration

// console.log error:
//https://stackoverflow.com/questions/68676372/typeerror-cb-is-not-a-function-in-nodejs

const base_url = "https://image.tmdb.org/t/p/original/"; // API met een database van alle film gegevens

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");


    //snippet of code die rund op een specifieke cindition/varaible
    useEffect(() => {
        //hier gaan we de informatie van de film feeding
        // if [], voer één keer uit wanneer de rij wordt geladen en voer het niet opnieuw uit
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies);
    //film trailer formaat en dat de trailer automatisch afspeelt 
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
          movieTrailer(movie?.name || "")
          .then((url) => {
            // https://www.youtube.com/watch?v=XtMThy8QKqU we gaan de code wat achter de 'v' staat want dat is het ID data
            const urlParams = new URLSearchParams (new URL(url).search); //newURL zit in een wrap
            setTrailerUrl(urlParams.get("v"));
          })
          .catch((error) => console.log(error));
        }
      };

    return (
        <div className="row">
            <h2>{title}</h2>

            {/* container -> posters */}
            <div className="row__posters">
                {/* row_poster */}
                {movies.map((movie) => (
                    <img
                        key={movie.id} //het scrollen gaat iets sneller
                        //als je op het plaatje klikt zou de trailer moeten afspelen X
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                ))}
            </div>
            {/* dit was een test */}
            {/* <YouTube videoId="XtMThy8QKqU" opts={opts} /> */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row