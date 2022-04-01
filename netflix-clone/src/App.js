import React from 'react';
import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* nav */}
      {/* title/main image */}
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLargeRow={true} //eigenlijk hoeft {true} niet erbij omdat je de functie al hebt bijgeroepen maar het is wel duidelijker
      /> 
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> 
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} /> 
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> 
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} /> 
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
 </div>
  );
}

export default App;
