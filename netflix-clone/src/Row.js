import React, { useState, useEffect } from 'react'
import axios from './axios'
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    //snippet of code die rund op een specifieke cindition/varaible
    useEffect(() => {
        //hier gaan we de informatie van de film feeding
        // if [], run once when the row loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    return (
        <div className="row">
            <h2>{title}</h2>

            {/* container -> posters */}
            <div className="row__posters">
                {/* row_poster */}
                {movies.map(movie => (
                    <img
                        key={movie.id} //het scrollen gaat iets sneller
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row