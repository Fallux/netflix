import axios from "axios";
//we hebben axios package geinstalleerd
// URL requests te doen aan de filmdatabase 

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
//wat er gebeurd is hij pakt de film package en zet het meteen op het adres neer
//(je opent in principe een nieuw bestand/pagina binnen de netflix webadres)
export default instance