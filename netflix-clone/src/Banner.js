import React, { useEffect, useState} from 'react'
import axios from './axios';
import requests from './requests';
// import InfoBlock from './InfoBlock';
import "./InfoBlock.css"
import "./Banner.css"

// const InfoBlockPage = <InfoBlock />

function Banner() {
        //variabel= movie//functie = setMovie
    const [movie, setMovie] = useState([]);
    const [isShow, setIsShow] = React.useState(false);
    useEffect(() => {
        async function fetchData() {
            //pak de Netflix original van de database
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                //functie random netflix data
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);
    // Dat je bij sommige omschrijvingen een... krijgt omdat het dan te lange informatie op de banner staat
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    
    const displayInfo = () => setIsShow((prev) => !prev);
   

    return (
        <header className='banner'
            style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
            }}
        >
            {/* {headImage} */}
            <div className='banner_contents'>
                {/* {title} */}
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/* {shortInfo} */}
                <div className='banner_buttons'>
                    {/* {playButton} */}
                    <button className='banner_Button'>Play</button>   
                    {/* {myList Button} */}
                    <button className='banner_Button'>My list</button>
                    {/* {infoButton} (idee hier was om een functionele omschrijving knop te krijgen X)*/}
                    <button className='banner_Button'>Info</button>
                    <div className={isShow ? "show" : "hide"}>my toggling component</div>
                    <button onClick={displayInfo}>toggle show</button>
                    <div className='infoBlockContainer'></div>
                </div>

                <h2 className='banner_description'>
                    {/* {maximum karakters = 150} */}
                    {truncate(movie?.overview, 150)}
                </h2>
                {/* {trailerPlayer} idee*/}
                {/* banner fade onderaan */}
                <div className='banner--fadeBottom'></div>
            </div>
        </header>
    );
}

export default Banner