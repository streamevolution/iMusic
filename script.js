// --- DATOS PRINCIPALES: Género -> Artista -> Canciones ---
const fullMusicData = {
    "Corridos": [
        { name: "El Tigrillo Palma", verified: true, imgSrc: "Tigrillo-Palma.jpg", songs: [
            { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" },
            { title: "El 24", duration: "2:32", audioSrc: "El Tigrillo - El 24.mp3", imgSrc: "c-el24.jpg" },
            { title: "Se Vale Soñar", duration: "3:45", audioSrc: "El Tigrillo Palma - Se Vale Soñar.mp3", imgSrc: "c-sevalesoñar.jpg" },
            { title: "Tu Nuevo Cariñito", duration: "3:05", audioSrc: "El Tigrillo - Tu Nuevo Cariñito.mp3", imgSrc: "c-tunuevocariñito.jpg" },
            { title: "La Piedrecita", duration: "2:34", audioSrc: "Tigrillo - La Piedrecita.mp3", imgSrc: "c-tigrillorandom.jpg" },
            { title: "El Corrido Del Chapo", duration: "3:45", audioSrc: "Tigrillo - El Corrido Del Chapo.mp3", imgSrc: "c-tigrillorandom.jpg" },
            { title: "El Güero Pesado", duration: "3:31", audioSrc: "Tigrillo - El Guero Pesado.mp3", imgSrc: "c-tigrillorandom2.jpg" },
            { title: "Paloma Azul", duration: "3:48", audioSrc: "Tigrillo - Paloma Azul.mp3", imgSrc: "c-el24.jpg" },
            { title: "Los Chiquinarcos", duration: "2:39", audioSrc: "Tigrillo - Los Chiquinarcos.mp3", imgSrc: "c-tigrillorandom.jpg" },
            { title: "La Tetona", duration: "2:39", audioSrc: "Tigrillo - La Tetona.mp3", imgSrc: "c-tigrillorandom2.jpg" },
            { title: "Fiesta En La Sierra", duration: "3:45", audioSrc: "Tigrillo - Fiesta En La Sierra.mp3", imgSrc: "c-fiestaenlasierra.jpg" },
            { title: "Vida De Mi Vida", duration: "3:45", audioSrc: "EL TIGRILLO PALMA - VIDA DE MI VIDA.mp3", imgSrc: "c-tigrillorandom3.jpg" },
            { title: "15 Años de Prisión", duration: "3:45", audioSrc: "Tigrillo - 15 Años De Prisión.mp3", imgSrc: "c-tigrillorandom4.jpg" },
            { title: "El 80", duration: "3:45", audioSrc: "Tigrillo - El 80.mp3", imgSrc: "c-tigrillorandom.jpg" },
            { title: "Alegre Me Ando Paseando", duration: "3:45", audioSrc: "Tigrillo - Alegre Me Ando Paseando.mp3", imgSrc: "c-tigrillorandom2.jpg" },
            { title: "El Amor De Un Pobre", duration: "3:45", audioSrc: "Tigrillo - El Amor De Un Pobre.mp3", imgSrc: "c-tigrillorandom3.jpg" },
            { title: "El Licenciado", duration: "3:45", audioSrc: "Tigrillo - El Licenciado.mp3", imgSrc: "c-tigrillorandom.jpg" },
            { title: "Y Andale", duration: "3:45", audioSrc: "El Tigrillo Palma - Y Andale.mp3", imgSrc: "c-tigrillorandom2.jpg" },
            { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" },
             { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" },
             { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" }
        ]},
        { name: "Chalino Sánchez", verified: true, imgSrc: "chalino.jpg", songs: [
            { title: "Pista Secreta", duration: "4:10", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" },
            { title: "Ritmo de Baja", duration: "3:05", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "Luis R Conriquez", verified: true, imgSrc: "LuisR-Conriquez.jpg", songs: [
            { title: "Clásico Norteño", duration: "3:15", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Los Plebes Del Rancho", verified: true, imgSrc: "LosPlebesDelRancho.jpg", songs: [
            { title: "Canción de Honor", duration: "2:45", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]}
    ],
    "Rap": [
        { name: "MC Rimas", verified: true, imgSrc: "caratula-prueba.jpg", songs: [
            { title: "Verso Uno", duration: "4:30", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" },
            { title: "Flow Eterno", duration: "3:10", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Doble Hache", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "Ritmo Callejero", duration: "3:50", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "La Maquina", verified: true, imgSrc: "caratula-prueba.jpg", songs: [
            { title: "Beats Pesados", duration: "4:05", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "El Poeta", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "Micrófono Abierto", duration: "3:30", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]}
    ],
    "Reggaeton": [
        { name: "El Ritmo Loco", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "Dembow Veraniego", duration: "3:20", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "Baila Nena", verified: true, imgSrc: "caratula-prueba.jpg", songs: [
            { title: "Pista de Pista", duration: "2:50", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Sabor Urbano", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "Lento y Suave", duration: "3:45", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]}
    ],
    "Cumbia": [
        { name: "Los Cumbieros Clásicos", verified: true, imgSrc: "caratula-prueba.jpg", songs: [
            { title: "El Baile del Sol", duration: "3:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Ritmo Tropical", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "Sonido Alegre", duration: "3:25", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "Orquesta Grande", verified: true, imgSrc: "caratula-prueba.jpg", songs: [
            { title: "Cumbia del Mar", duration: "4:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]}
    ],
    "Banda": [
        { name: "Banda de Oro", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "Marcha Triunfal", duration: "4:00", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "Estrellas del Sol", verified: true, imgSrc: "caratula-prueba.jpg", songs: [
            { title: "Amor de Ciudad", duration: "3:10", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Los Tonaltecas", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [
            { title: "El Último Adiós", duration: "3:35", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]}
    ],
    "Pop": [ 
        { name: "Chica Pop", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Hit de Verano", duration: "3:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] },
        { name: "Baladas de Luna", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "Sueño Azul", duration: "3:40", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] },
        { name: "El Solista", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Vuelve a Mí", duration: "4:15", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] }
    ],
    "Rock": [ 
        { name: "Banda Rocker", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "Riff Pesado", duration: "3:00", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] },
        { name: "Gritos en el Ruido", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Energía Oscura", duration: "4:45", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] },
        { name: "Heavy Groove", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "Metal Puro", duration: "3:50", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] }
    ],
    "Electrónica": [ 
        { name: "DJ Synth", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Beat Nocturno", duration: "3:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] },
        { name: "Control Remoto", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "House Party", duration: "4:10", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] },
        { name: "El Productor", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Trance Total", duration: "5:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] }
    ],
    "Jazz": [ 
        { name: "Trio Cool", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "Saxofón Azul", duration: "3:00", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] },
        { name: "Piano Elegante", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Noche en París", duration: "4:20", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] },
        { name: "Jazz Fusión", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "Improvisación", duration: "5:30", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] }
    ],
    "Clásica": [ 
        { name: "El Maestro", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Sinfonía No. 5", duration: "3:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] },
        { name: "Cuarteto de Cuerdas", verified: true, imgSrc: "caratula-prueba-2.jpg", songs: [ { title: "Adagio Misterioso", duration: "6:00", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" } ] },
        { name: "Pianista Solitario", verified: true, imgSrc: "caratula-prueba.jpg", songs: [ { title: "Sonata al Atardecer", duration: "3:50", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" } ] }
    ]
};
const genreColors = {
    "Corridos": "#8E24AA", "Rap": "#1E88E5", "Reggaeton": "#D81B60", "Cumbia": "#43A047", 
    "Banda": "#E53935", "Pop": "#FFB300", "Rock": "#546E7A", "Electrónica": "#00ACC1", 
    "Jazz": "#7CB342", "Clásica": "#6D4C41" 
};


// --- Elementos del DOM ---
const fullPlayer = document.getElementById('fullPlayer');
const miniPlayer = document.getElementById('miniPlayer');
const audioPlayer = document.getElementById('audioPlayer');
const genresView = document.getElementById('genresView');
const genreList = document.getElementById('genreList');
const searchInput = document.getElementById('searchInput'); 
const searchResultsContainer = document.getElementById('searchResults'); 
const genreViewHeader = document.getElementById('genreViewHeader'); 
const homeBtn = document.getElementById('homeBtn'); 
const homeBtnSearch = document.getElementById('homeBtnSearch'); 
const favoritesBtn = document.getElementById('favoritesBtn'); 
const addMusicBtn = document.getElementById('addMusicBtn'); 

const appModal = document.getElementById('appModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModalBtn = document.getElementById('closeModalBtn');

const fullPlayPauseIcon = document.getElementById('fullPlayPauseIcon');
const miniPlayPauseIcon = document.getElementById('miniPlayPauseIcon');
const progressBarContainer = document.querySelector('.progress-bar-container'); 
const progressBar = document.getElementById('progressBar');
const progressDot = document.getElementById('progressDot');
const fullHeart = document.getElementById('fullHeart');
const miniHeart = document.getElementById('miniHeart');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const miniNextBtn = document.getElementById('miniNextBtn');
const currentTimeEl = document.querySelector('.current-time');
const durationTimeEl = document.getElementById('durationTime');
const albumArtEl = document.getElementById('albumArt');
const miniTitleEl = document.getElementById('miniTitle');
const miniArtistEl = document.getElementById('miniArtist');
const miniArtEl = document.getElementById('miniArt');


// --- Estados y Datos ---
let currentSongIndex = 0;
let isSeeking = false; 
let currentPlaylist = []; 
let originalPlaylist = []; 
let favoritesList = []; // Lista para almacenar las canciones favoritas

const initialPlaylist = [
    { title: "Pista de Introducción", artist: "Músico Ejemplo A", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg", genre: "Pop" }
];
originalPlaylist = initialPlaylist;
currentPlaylist = [...initialPlaylist]; 


// --- Persistencia (Local Storage) ---

function saveFavorites() {
    localStorage.setItem('iMusicFavorites', JSON.stringify(favoritesList));
}

function loadFavorites() {
    const savedFavorites = localStorage.getItem('iMusicFavorites');
    if (savedFavorites) {
        try {
            favoritesList = JSON.parse(savedFavorites);
        } catch (e) {
            console.error("Error al cargar favoritos del almacenamiento local:", e);
            favoritesList = [];
        }
    }
}

function checkFavoriteState() {
     const currentSongData = currentPlaylist[currentSongIndex];
     const songId = currentSongData.title + currentSongData.artist; 
     const isFavorite = favoritesList.some(s => (s.title + s.artist) === songId);

     if (isFavorite) {
         fullHeart.classList.add('liked');
         miniHeart.classList.add('liked');
     } else {
         fullHeart.classList.remove('liked');
         miniHeart.classList.remove('liked');
     }
}


// --- Lógica de BÚSQUEDA ---

function handleSearch(query) {
    const term = query.toLowerCase().trim();
    
    if (term.length === 0) {
        genreList.classList.remove('hidden');
        searchResultsContainer.classList.add('hidden');
        document.querySelector('.view-header h1').textContent = 'Explorar';
        document.querySelector('.view-header p').textContent = 'Toca un género para ver artistas';
        favoritesBtn.classList.remove('hidden'); 
        return;
    }

    genreList.classList.add('hidden');
    searchResultsContainer.classList.remove('hidden');
    document.querySelector('.view-header h1').textContent = 'Resultados';
    document.querySelector('.view-header p').textContent = `Buscando: "${query}"`;
    favoritesBtn.classList.add('hidden'); 
    
    let songsFound = [];
    let artistsFound = [];
    
    Object.keys(fullMusicData).forEach(genre => {
        fullMusicData[genre].forEach(artist => {
            const artistName = artist.name.toLowerCase();
            
            if (artistName.includes(term)) {
                artistsFound.push({ ...artist, genre });
            }

            artist.songs.forEach(song => {
                const songTitle = song.title.toLowerCase();
                if (songTitle.includes(term)) {
                    songsFound.push({ 
                        ...song, 
                        artistName: artist.name, 
                        imgSrc: song.imgSrc || artist.imgSrc,
                        genre,
                        artistSongs: artist.songs
                    });
                }
            });
        });
    });

    let htmlContent = '';
    
    if (artistsFound.length > 0) {
        htmlContent += '<h3>Artistas</h3>';
        artistsFound.forEach(artist => {
            htmlContent += `
                <div class="modal-item artist-item search-item" data-artist="${artist.name}" data-genre="${artist.genre}">
                    <div class="item-art" style="background-image: url('${artist.imgSrc}')"></div>
                    <div class="modal-item-info">
                        <span class="item-title">${artist.name}</span>
                        <span class="item-subtitle">${artist.genre} Artist</span>
                    </div>
                    <i class="fas fa-check-circle verified-icon"></i>
                </div>
            `;
        });
    }

    if (songsFound.length > 0) {
        htmlContent += '<h3>Canciones</h3>';
        songsFound.forEach((song, index) => {
            htmlContent += `
                <div class="modal-item song-item search-item" data-search-index="${index}" data-type="song-result">
                    <div class="item-art song-item-art" style="background-image: url('${song.imgSrc}')"></div>
                    <div class="modal-item-info">
                        <span class="item-title">${song.title}</span>
                        <span class="item-subtitle">${song.artistName} · ${song.duration}</span>
                    </div>
                </div>
            `;
        });
    }
    
    if (artistsFound.length === 0 && songsFound.length === 0) {
        htmlContent = `<p class="not-found">No se encontraron resultados para "${query}".</p>`;
    }

    searchResultsContainer.innerHTML = htmlContent;

    document.querySelectorAll('.artist-item.search-item').forEach(item => {
        item.addEventListener('click', () => {
            renderSongsModal(item.dataset.genre, item.dataset.artist);
        });
    });

    document.querySelectorAll('.song-item.search-item').forEach(item => {
        item.addEventListener('click', () => {
            const searchIndex = parseInt(item.dataset.searchIndex);
            const selectedSong = songsFound[searchIndex];
            
            originalPlaylist = selectedSong.artistSongs;
            currentPlaylist = [...originalPlaylist];
            const newIndex = currentPlaylist.findIndex(s => s.title === selectedSong.title);

            loadSong(newIndex !== -1 ? newIndex : 0, true);
        });
    });
}


// --- Lógica de VISTAS y MODALES ---

function openModal(title, contentHTML) {
    modalTitle.textContent = title;
    modalBody.innerHTML = contentHTML;
    appModal.classList.remove('hidden');
}

function closeModal() {
    appModal.classList.add('hidden');
    modalBody.innerHTML = '';
}

function renderArtistsModal(genre) {
    const artists = fullMusicData[genre];
    if (!artists) {
        openModal(genre, `<p style="color:var(--spotify-light-gray);">No hay artistas cargados para ${genre} en este demo.</p>`);
        return;
    }

    let htmlContent = '<div class="artist-list">';
    artists.forEach(artist => {
        const verifiedIcon = '<i class="fas fa-check-circle verified-icon"></i>';
        htmlContent += `
            <div class="modal-item artist-item" data-artist="${artist.name}" data-genre="${genre}">
                <div class="item-art" style="background-image: url('${artist.imgSrc}')"></div>
                <div class="modal-item-info">
                    <span class="item-title">${artist.name}</span>
                    <span class="item-subtitle">${genre} Artist</span>
                </div>
                ${verifiedIcon}
            </div>
        `;
    });
    htmlContent += '</div>';

    openModal(`Artistas de ${genre}`, htmlContent);
    
    document.querySelectorAll('.artist-item').forEach(item => {
        item.addEventListener('click', () => {
            const artistName = item.dataset.artist;
            renderSongsModal(genre, artistName);
        });
    });
}

function renderSongsModal(genre, artistName) {
    const artist = fullMusicData[genre].find(a => a.name === artistName);
    if (!artist || !artist.songs) return;

    let htmlContent = '<div class="song-list">';
    artist.songs.forEach((song, index) => {
        htmlContent += `
            <div class="modal-item song-item" data-song-index="${index}" data-artist="${artistName}" data-genre="${genre}">
                <div class="item-art song-item-art" style="background-image: url('${song.imgSrc}')"></div>
                <div class="modal-item-info">
                    <span class="item-title">${song.title}</span>
                    <span class="item-subtitle">${artistName} · ${song.duration}</span>
                </div>
            </div>
        `;
    });
    htmlContent += '</div>';

    openModal(`Canciones de ${artistName}`, htmlContent);
    
    document.querySelectorAll('.song-item').forEach(item => {
        item.addEventListener('click', () => {
            const songIndex = parseInt(item.dataset.songIndex); 
            
            originalPlaylist = artist.songs;
            currentPlaylist = [...originalPlaylist];
            
            loadSong(songIndex, true); 
            
            closeModal();
            togglePlayerView(true);
        });
    });
}

function renderGenres() {
    genreList.innerHTML = '';
    const genres = Object.keys(genreColors);

    genres.forEach((genre) => {
        const color = genreColors[genre];
        
        const card = document.createElement('div');
        card.className = 'genre-card';
        card.textContent = genre;
        card.style.backgroundColor = color;
        
        card.addEventListener('click', () => {
             renderArtistsModal(genre);
        });

        genreList.appendChild(card);
    });
}

function togglePlayerView(showFull) {
    if (showFull) {
        fullPlayer.classList.remove('hidden'); 
        genresView.classList.add('hidden');    
        miniPlayer.classList.add('hidden');    
    } else {
        fullPlayer.classList.add('hidden');    
        genresView.classList.remove('hidden'); 
        miniPlayer.classList.remove('hidden'); 
        
        if (searchInput.value.length > 0) {
             searchInput.value = '';
             handleSearch('');
        }
    }
}

/**
 * Renderiza el modal con la lista de canciones favoritas.
 */
function renderFavoritesModal() {
    let htmlContent = '';

    if (favoritesList.length === 0) {
        htmlContent = `<p class="not-found" style="color:var(--spotify-light-gray);">Aún no tienes canciones favoritas. Toca el corazón en el reproductor para agregarlas.</p>`;
    } else {
        originalPlaylist = favoritesList;
        
        htmlContent += '<div class="song-list">';
        favoritesList.forEach((song, index) => {
            htmlContent += `
                <div class="modal-item song-item favorite-item" data-favorite-index="${index}">
                    <div class="item-art song-item-art" style="background-image: url('${song.imgSrc}')"></div>
                    <div class="modal-item-info">
                        <span class="item-title">${song.title}</span>
                        <span class="item-subtitle">${song.artist}</span>
                    </div>
                </div>
            `;
        });
        htmlContent += '</div>';
    }

    openModal(`Tus Favoritos (${favoritesList.length})`, htmlContent);

    document.querySelectorAll('.favorite-item').forEach(item => {
        item.addEventListener('click', () => {
            const favoriteIndex = parseInt(item.dataset.favoriteIndex);
            
            currentPlaylist = favoritesList; 
            loadSong(favoriteIndex, true); 
            
            closeModal();
            togglePlayerView(true);
        });
    });
}


// --- Lógica de Reproductor y Utilidades ---

function updateUI(songData) {
    document.getElementById('headerTitle').textContent = songData.genre || 'ÁLBUM';
    document.getElementById('mainTitle').textContent = songData.title;
    document.getElementById('mainArtist').textContent = songData.artist || songData.artistName;
    document.getElementById('albumArt').style.backgroundImage = `url('${songData.imgSrc}')`;

    document.getElementById('miniTitle').textContent = songData.title;
    document.getElementById('miniArtist').textContent = songData.artist || songData.artistName;
    document.getElementById('miniArt').style.backgroundImage = `url('${songData.imgSrc}')`;
}

function updatePlayPauseIcons(isPlaying) {
    const action = isPlaying ? ['remove', 'add'] : ['add', 'remove'];
    document.getElementById('fullPlayPauseIcon').classList[action[0]]('fa-play');
    document.getElementById('fullPlayPauseIcon').classList[action[1]]('fa-pause');
    document.getElementById('miniPlayPauseIcon').classList[action[0]]('fa-play');
    document.getElementById('miniPlayPauseIcon').classList[action[1]]('fa-pause');
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function loadSong(index, autoPlay = false) {
    currentSongIndex = index;
    const songData = currentPlaylist[currentSongIndex];
    
    if (!songData) return;

    let fullSongData = songData;
    
    if (!fullSongData.audioSrc) {
         fullSongData = {
            ...fullSongData,
            audioSrc: 'musica-de-prueba.mp3', 
            imgSrc: fullSongData.imgSrc || 'caratula-prueba.jpg',
            genre: fullSongData.genre || 'Pop',
            artist: fullSongData.artist || 'Artista Ejemplo'
        };
    }
    
    audioPlayer.src = fullSongData.audioSrc;
    updateUI(fullSongData);

    checkFavoriteState(); 

    if (autoPlay) {
        audioPlayer.play();
        updatePlayPauseIcons(true);
    } else {
        updatePlayPauseIcons(false);
    }
}

function handlePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        updatePlayPauseIcons(true);
    } else {
        audioPlayer.pause();
        updatePlayPauseIcons(false);
    }
}

function skipSong(direction) {
    currentSongIndex = (currentSongIndex + direction + currentPlaylist.length) % currentPlaylist.length;
    loadSong(currentSongIndex, true);
}

function handleLike() {
    const currentSongData = currentPlaylist[currentSongIndex];
    const songId = currentSongData.title + currentSongData.artist; 
    const index = favoritesList.findIndex(s => (s.title + s.artist) === songId);

    if (index === -1) {
        favoritesList.push(currentSongData);
        fullHeart.classList.add('liked');
        miniHeart.classList.add('liked');
    } else {
        favoritesList.splice(index, 1);
        fullHeart.classList.remove('liked');
        miniHeart.classList.remove('liked');
    }
    saveFavorites();
}

function toggleShuffle() {
    shuffleBtn.classList.toggle('active');
    
    if (shuffleBtn.classList.contains('active')) {
        currentPlaylist = [...originalPlaylist]; 
        
        for (let i = currentPlaylist.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [currentPlaylist[i], currentPlaylist[j]] = [currentPlaylist[j], currentPlaylist[i]];
        }
        
        const currentTitle = originalPlaylist[currentSongIndex].title;
        const newIndex = currentPlaylist.findIndex(s => s.title === currentTitle);
        if (newIndex !== -1) {
            currentSongIndex = newIndex;
        } else {
            currentSongIndex = 0;
        }
    } else {
        const currentTitle = currentPlaylist[currentSongIndex].title;
        currentPlaylist = [...originalPlaylist];
        
        const newIndex = currentPlaylist.findIndex(s => s.title === currentTitle);
        if (newIndex !== -1) {
            currentSongIndex = newIndex;
        } else {
            currentSongIndex = 0;
        }
    }
    loadSong(currentSongIndex);
}

function toggleRepeat() {
    repeatBtn.classList.toggle('active');
}

// Drag Seek Logic

function calculateSeekPosition(e) {
    const rect = progressBarContainer.getBoundingClientRect();
    let clientX;
    if (e.touches) {
        clientX = e.touches[0].clientX;
    } else {
        clientX = e.clientX;
    }
    const offset = clientX - rect.left;
    let percent = (offset / rect.width) * 100;
    
    percent = Math.max(0, Math.min(100, percent));
    
    const newTime = (percent / 100) * audioPlayer.duration;
    
    return { newTime, percentage: percent };
}

function startSeek(e) {
    e.preventDefault();
    isSeeking = true;
    
    const { newTime, percentage } = calculateSeekPosition(e);
    
    progressBar.style.width = `${percentage}%`;
    progressDot.style.left = `${percentage}%`;
    document.querySelector('.current-time').textContent = formatTime(newTime);
    
    const moveEvent = e.type.includes('mouse') ? 'mousemove' : 'touchmove';
    const endEvent = e.type.includes('mouse') ? 'mouseup' : 'touchend';
    
    document.addEventListener(moveEvent, seekOnDrag);
    document.addEventListener(endEvent, endSeek);
}

function seekOnDrag(e) {
    if (!isSeeking) return;
    
    const { newTime, percentage } = calculateSeekPosition(e);
    
    progressBar.style.width = `${percentage}%`;
    progressDot.style.left = `${percentage}%`;
    document.querySelector('.current-time').textContent = formatTime(newTime);
}

function endSeek(e) {
    isSeeking = false;
    
    document.removeEventListener('mousemove', seekOnDrag);
    document.removeEventListener('touchmove', seekOnDrag);
    document.removeEventListener('mouseup', endSeek);
    document.removeEventListener('touchend', endSeek);
    
    const { newTime } = calculateSeekPosition(e);
    audioPlayer.currentTime = newTime;
    
    document.getElementById('miniProgressBar').style.width = `${(newTime / audioPlayer.duration) * 100}%`;
}


// --- Event Listeners Globales ---

document.addEventListener('DOMContentLoaded', () => {
    loadFavorites(); 
    loadSong(currentSongIndex);
    renderGenres();
    togglePlayerView(false); 
    
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);

    // Listener para la barra de búsqueda
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    
    // Botón de Favoritos
    favoritesBtn.addEventListener('click', renderFavoritesModal);
    
    // Botón Home en el reproductor (vuelve a la vista de géneros)
    document.getElementById('homeBtn').addEventListener('click', () => togglePlayerView(false));
    
    // Botón Home en la barra de búsqueda (limpia y vuelve a géneros)
    document.getElementById('homeBtnSearch').addEventListener('click', () => {
        searchInput.value = '';
        handleSearch(''); 
    });
    
    // Botón Agregar Música (WhatsApp)
    addMusicBtn.addEventListener('click', () => {
        window.open('https://wa.me/5215512345678?text=Hola! Me gustaría sugerir música para agregar a iMusic.', '_blank');
    });
});

// Audio Events
document.getElementById('durationTime').textContent = formatTime(0);

audioPlayer.addEventListener('loadedmetadata', () => {
    document.getElementById('durationTime').textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('timeupdate', () => {
    if (!isNaN(audioPlayer.duration) && !isSeeking) { 
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        
        document.getElementById('progressBar').style.width = `${progressPercent}%`;
        document.getElementById('progressDot').style.left = `${progressPercent}%`;
        document.getElementById('miniProgressBar').style.width = `${progressPercent}%`;
        document.querySelector('.current-time').textContent = formatTime(audioPlayer.currentTime);
    }
});

audioPlayer.addEventListener('ended', () => {
    if (repeatBtn.classList.contains('active')) {
        audioPlayer.currentTime = 0;
        audioPlayer.play();
    } else {
        skipSong(1); 
    }
});

// Eventos de Seek
progressBarContainer.addEventListener('mousedown', startSeek);
progressBarContainer.addEventListener('touchstart', startSeek, { passive: true });


// Botones de Vistas
document.getElementById('minimizeBtn').addEventListener('click', () => togglePlayerView(false));
document.getElementById('miniPlayer').addEventListener('click', (e) => {
    if (!e.target.closest('.mini-controls')) {
        togglePlayerView(true); 
    }
});

// Controles de Reproducción Sincronizados
document.getElementById('playPauseBtn').addEventListener('click', handlePlayPause);
document.getElementById('miniPlayPauseBtn').addEventListener('click', handlePlayPause);
document.getElementById('nextBtn').addEventListener('click', () => skipSong(1));
document.getElementById('miniNextBtn').addEventListener('click', () => skipSong(1));
document.getElementById('prevBtn').addEventListener('click', () => skipSong(-1));

// Controles de Funcionalidad
document.getElementById('fullHeart').addEventListener('click', handleLike);
document.getElementById('miniHeart').addEventListener('click', handleLike);
document.getElementById('shuffleBtn').addEventListener('click', () => toggleShuffle());
document.getElementById('repeatBtn').addEventListener('click', () => toggleRepeat());

