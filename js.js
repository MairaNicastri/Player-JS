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

const songListWrapper = document.querySelector('#songListWrapper');

function SongList(){
    tracks.forEach(track => {
        let lista = document.createElement('div');

        lista.classList.add('col-12');

        lista.innerHTML = 
        `
        <div class="listadesign d-flex justify-content-between align-items-center">
            <h3 class="titolocolor">${track.artist} - ${track.title} </h3>
            <button class="btn bottonemenu2 active">
            <i class="fas fa-play"></i>
        </button>
        </div>
        `
        songListWrapper.appendChild(lista)
    })
}
SongList()



