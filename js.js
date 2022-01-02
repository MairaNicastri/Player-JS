let tracks = [
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Disturbed -  Inside the Fire.mp3' ,
        cover : './cover/disturbed fire.JPG' ,
        artist : 'Disturbed' ,
        title : 'Inside the Fire'},
    {   url : './musica/Slipknot - Psychosocial.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Psychosocial'},
    {   url : './musica/Linkin Park - Place for My Head.mp3' ,
        cover : './cover/hybrid theory.JPG' ,
        artist : 'Linkin Park' ,
        title : 'Place for My Head'},
    {   url : './musica/Disturbed - The Night.mp3' ,
        cover : './cover/disturbed fire.JPG' ,
        artist : 'Disturbed' ,
        title : 'The Night'},
    {   url : './musica/Marilyn Manson - Sweet Dreams.mp3' ,
        cover : './cover/sweet.JPG' ,
        artist : 'Marilyn Manson' ,
        title : 'Sweet Dreams'},
    {   url : './musica/Metallica - Enter Sandman.mp3' ,
        cover : './cover/metallica.JPG' ,
        artist : 'Metallica' ,
        title : 'Enter Sandman'},
    {   url : './musica/Metallica - One.mp3' ,
        cover : './cover/metallica justice.JPG' ,
        artist : 'Metallica' ,
        title : 'One'},
    {   url : './musica/Slipknot - Vermillion.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Vermillion'},
    {   url : './musica/Metallica - Nothing else matter.mp3' ,
        cover : './cover/metallica.JPG' ,
        artist : 'Metallica' ,
        title : 'Nothing else matter'},
    {   url : './musica/slipknot snuff.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Snuff'},
]
// -----------------------------COSTANTI--------------------------------------

// BOTTONE LISTA CANZONI
const songListWrapper = document.querySelector('#songListWrapper');
// BOTTONI PLAY PASUSA
const Play = document.querySelector('#Play');
const Pause = document.querySelector('#Pause');
// COVER DELL'ALBUM
const Cover = document.querySelector('.cover');
// AUDIO PRIMA CANZONE IN HTML
const Track = document.querySelector('#track');
let currentTrack = 0;
// DATI CANZONE
const tracktitle = document.querySelector('#tracktitle');
const trackartist = document.querySelector('#trackartist');
// TASTI AVANTI E DIETRO
const nextTrack = document.querySelector('#nextTrack');
const prevTrack = document.querySelector('#prevTrack');
// TASTO AGGIUNTA PREFERITI E SEZIONE CORRISPONDENTE DOVE STAMPARE ELENCO
const songloved =document.querySelector('#songloved');
const loved = document.querySelector('#loved')
// TASTO ORDINE ESECUZIONE MUSICA CHE TOGGLA
const normal = document.querySelector('#normal');
const casual = document.querySelector('#casual');
// VARIABILI PER TEMPO CORRENTE E TEMPO TOTALE AUDIO
const currentTime = document.querySelector('#currentTime');
const totalTime = document.querySelector('#totalTime');
// COSTANTE PER PROGRESSBAR
const progressTimeBar = document.querySelector('#progressTimeBar');
// COSTANTE PER AREA RICERCA
const SearchArea = document.querySelector('#SearchArea');
const listarisultati = document.querySelector('#listarisultati')
// ----------------------------------FUNZIONI----------------------------------


// FUNZIONE LISTA BRANI
function SongList(){
    tracks.forEach(track => {
        let lista = document.createElement('div');

        lista.classList.add('col-12');

        lista.innerHTML =
        `
        <div class="listadesign d-flex justify-content-between align-items-center">
            <h3 class="titolocolor">${track.artist} - ${track.title} </h3>
            <button class="btn bottonemenu2">
            <i class="fas fa-play"></i>
        </button>
        </div>
        `
        songListWrapper.appendChild(lista)
    })
};
console.log(SongList())


// FUNZIONE CHE IMPOSTA TUTTI I DETTAGLI IN BASE ALLA TRACCIA


function ChangeTrackDetails(){
    let song = tracks[currentTrack]
    Cover.src = song.cover
    Track.src =song.url
    trackartist.innerHTML = song.artist
    tracktitle.innerHTML = song.title


};
console.log(ChangeTrackDetails())

// FUNZIONE PER ANDARE AVANTI E INDIETRO CON LA TRACCIA
function nexttrack (){
    currentTrack++
    if(currentTrack > tracks.length -1){
    currentTrack=0
    }
ChangeTrackDetails()
};
function prevtrack (){
    currentTrack--
    if(currentTrack < 0){
    currentTrack= tracks.length - 1
    }
ChangeTrackDetails()
};

// FUNZIONE AGGIUNGERE AI PREFERITI E CREARE NUOVO ARRAY CON PREFERITI
function addsong() {
    let FavouriteSong = [];
    FavouriteSong.push(tracks[currentTrack]);
    return FavouriteSong
};
console.log(addsong())

function favouritesong(){
    addsong().forEach(track => {
        let listalove = document.createElement('div');

        listalove.classList.add('col-12');

        listalove.innerHTML =
        `
        <div class="listadesign d-flex justify-content-between align-items-center">
            <h3 class="titolocolor">${track.artist} - ${track.title} </h3>
            <button class="btn bottonemenu">
            <i class="fas fa-heart-broken"></i>
        </button>
        </div>
        `
        songloved.appendChild(listalove)
    })
};
console.log(favouritesong())


// FUNZIONE CONVERTITORE MINUTI SECONDI
function formatTime(sec){
    let minutes= Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);

    if(seconds<10){
        return `${minutes}:0${seconds}`
    }
    return `${minutes}:${seconds}`
};

// FUNZIONE PROGRESSO DEL TEMPO
function updateProgress (){
    let progress = (Track.currentTime / Track.duration) * 100
    
    progressTimeBar.style.width = progress+'%'
    currentTime.innerHTML = formatTime(progress)
};

// FUNZIONE RICERCA per titolo
function searchsongs (search) {       
    let filtered = tracks.filter((song)=>{
        return song.title.toLowerCase().includes(search.toLowerCase()) 
    })
    console.log (filtered)
    return filtered
    
};

// -------------------------EVENTI-----------------------


// TOGGLE PLAY PAUSE con fuoco(coverplay) su cover al play e inizio e pausa audio(track play e pause)

Play.addEventListener('click', ()=>{
    Play.classList.toggle('d-none')
    Pause.classList.toggle('d-none')
    Cover.classList.toggle('coverplay')
    Track.play()
});
Pause.addEventListener('click', ()=>{
    Play.classList.toggle('d-none')
    Pause.classList.toggle('d-none')
    Cover.classList.toggle('coverplay')
    Track.pause()
});
// TATI INDIETRO E AVANTI
nextTrack.addEventListener('click', () =>{
    nexttrack()
    Play.classList.add('d-none')
    Pause.classList.remove('d-none')
    Cover.classList.add('coverplay')
    Track.play()
});
prevTrack.addEventListener('click', () =>{
    prevtrack()
    Play.classList.add('d-none')
    Pause.classList.remove('d-none')
    Cover.classList.add('coverplay')
    Track.play()
});
// TASTO AGGIUNTA PREFERITI E STAMPA LA LISTA
loved.addEventListener('click' , () =>{
    
    favouritesong()
    addsong()
});
// EVENTO PER FAR PARTIRE ALTRA TRACCIA QUANDO L'ATTUALE TERMINA
Track.addEventListener('ended', ()=>{
    nexttrack()
    Play.classList.add('d-none')
    Pause.classList.remove('d-none')
    Cover.classList.add('coverplay')
    Track.play()
});
// EVENTO TOGGLE ORDINE ESECUZIONE MUSICA
normal.addEventListener('click', ()=>{
    normal.classList.toggle('d-none')
    casual.classList.toggle('d-none')
});
casual.addEventListener('click', ()=>{
    normal.classList.toggle('d-none')
    casual.classList.toggle('d-none')
});

Track.addEventListener('timeupdate' , () => {
    updateProgress()
});

Track.addEventListener('loadeddata', () => {
    currentTime.innerHTML = formatTime(0)
    totalTime.innerHTML = formatTime(Track.duration)
});

SearchArea.addEventListener('input' , () =>{
    if (searchsongs(SearchArea.value) == ''){
        let lista2 = document.createElement('div');

        lista2.classList.add('col-12');

        lista2.innerHTML = ''
        listarisultati.appendChild(lista2)
    } else {
    searchsongs(SearchArea.value).forEach(track => {
        let lista2 = document.createElement('div');

        lista2.classList.add('col-12');

        lista2.innerHTML =
        `
        <div class="listadesign d-flex justify-content-between align-items-center">
            <h3 class="titolocolor">${track.artist} - ${track.title} </h3>
            <button class="btn bottonemenu2">
            <i class="fas fa-heart"></i>
        </button>
        </div>
        `
        listarisultati.appendChild(lista2)
    }) 
    }   
    
});




    // if (SearchArea.value == ''){
    //     let lista2 = document.createElement('div');

    //     lista2.classList.add('col-12');

    //     lista.innerHTML = ''}
    //     else {
    //     let lista2 = document.createElement('div');

    //     lista2.classList.add('col-12');

    //     lista2.innerHTML =  `
    //     <div class="listadesign d-flex justify-content-between align-items-center">
    //         <h3 class="titolocolor">${tracks.artist} - ${tracks.SearchSong(SearchArea.value)} </h3>
    //         <button class="btn bottonemenu2">
    //         <i class="fas fa-play"></i>
    //     </button>
    //     </div>
    //     `
    //     }
       
    //     listarisultati.appendChild(lista2)   

