import { songs } from "./songs.js"; 

function title(){
    songs = songs.sort((a,b) => {a.title - b.title});
}

title();