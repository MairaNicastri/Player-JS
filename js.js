let tracks = [
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Disturbed - Inside the Fire.mp3' ,
        cover : './cover/disturbed fire.JPG' ,
        artist : 'Disturbed' ,
        title : 'Inside the Fire'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'tre' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'quattro' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : '55555' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
    {   url : './musica/Slipknot - Sulfur.mp3' ,
        cover : './cover/All Hope Is Gone.JPG' ,
        artist : 'Slipknot' ,
        title : 'Sulfur'},
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
function nexttrack (){
    currentTrack++
    if(currentTrack > tracks.length -1){
    currentTrack=0
    }
ChangeTrackDetails()
}
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
});
prevTrack.addEventListener('click', () =>{
    prevtrack()
});
