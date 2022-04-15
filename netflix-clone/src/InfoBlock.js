// import React, { useEffect, useState} from 'react'
// import axios from './axios';
// import requests from './requests';
// import "./InfoBlock.css";
// import "./Nav.js";

// function InfoBlock() {
//     const [movie, setMovie] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(requests.fetchNetflixOriginals);
//             setMovie(
//                 request.data.results[
//                     Math.floor(Math.random() * request.data.results.length - 1)
//                 ]
//             );
//             return request;
//         }
//         fetchData();
//     }, []);

//     return(
//         <div className='infoBlockContainer'>
//             <div className='descriptionInfoBlock'>
//                 dit is een test
//                 {movie?.overview}
//             </div>
//         </div>
//     )

// }

// export default InfoBlock
