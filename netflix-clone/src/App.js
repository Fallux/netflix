import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
// import InfoBlock from './InfoBlock';


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {/* <InfoBlock /> */}
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow={true} //eigenlijk hoeft {true} niet erbij omdat je de functie al hebt bijgeroepen maar het is wel duidelijker
      /> 
      {/* pakt de url link van het specifieke db kolom uit Requests  */}
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
