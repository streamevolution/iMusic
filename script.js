// --- DATOS PRINCIPALES: Género -> Artista -> Canciones ---
const fullMusicData = {
    "Corridos": [
        { name: "El Tigrillo Palma", verified: true, imgSrc: "Tigrillo-Palma.jpg", songs: [
            { title: "El Bazucazo", artist: "Tigrillo Palma ", duration: "2:32", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg", genre: "CORRIDOS" },
            { title: "El 24", artist: "Tigrillo Palma ", duration: "2:32", audioSrc: "El Tigrillo - El 24.mp3", imgSrc: "c-el24.jpg", genre: "CORRIDOS" },
            { title: "Se Vale Soñar", artist: "Tigrillo Palma ", duration: "3:45", audioSrc: "El Tigrillo Palma - Se Vale Soñar.mp3", imgSrc: "c-sevalesoñar.jpg", genre: "CORRIDOS" },
            { title: "Tu Nuevo Cariñito", artist: "Tigrillo Palma ", duration: "3:05", audioSrc: "El Tigrillo - Tu Nuevo Cariñito.mp3", imgSrc: "c-tunuevocariñito.jpg", genre: "CORRIDOS" },
            { title: "La Piedrecita", artist: "Tigrillo Palma ", duration: "2:34", audioSrc: "Tigrillo - La Piedrecita.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "El Corrido Del Chapo", artist: "Tigrillo Palma ", duration: "2:46", audioSrc: "Tigrillo - El Corrido Del Chapo.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "El Güero Pesado", artist: "Tigrillo Palma ", duration: "3:32", audioSrc: "Tigrillo - El Guero Pesado.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Paloma Azul", artist: "Tigrillo Palma ", duration: "3:48", audioSrc: "Tigrillo - Paloma Azul.mp3", imgSrc: "c-el24.jpg", genre: "CORRIDOS" },
            { title: "Los Chiquinarcos", artist: "Tigrillo Palma ", duration: "2:39", audioSrc: "Tigrillo - Los Chiquinarcos.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "La Tetona", artist: "Tigrillo Palma ", duration: "2:39", audioSrc: "Tigrillo - La Tetona.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Fiesta En La Sierra", artist: "Tigrillo Palma ", duration: "3:04", audioSrc: "Tigrillo - Fiesta En La Sierra.mp3", imgSrc: "c-fiestaenlasierra.jpg", genre: "CORRIDOS" },
            { title: "Vida De Mi Vida", artist: "Tigrillo Palma ", duration: "2:013", audioSrc: "EL TIGRILLO PALMA - VIDA DE MI VIDA.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "15 Años de Prisión", artist: "Tigrillo Palma ", duration: "2:57", audioSrc: "Tigrillo - 15 Años De Prisión.mp3", imgSrc: "c-tigrillorandom4.jpg", genre: "CORRIDOS" },
            { title: "El 80", artist: "Tigrillo Palma ", duration: "2:40", audioSrc: "Tigrillo - El 80.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Alegre Me Ando Paseando", artist: "Tigrillo Palma ", duration: "2:19", audioSrc: "Tigrillo - Alegre Me Ando Paseando.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "El Amor De Un Pobre", artist: "Tigrillo Palma ", duration: "2:40", audioSrc: "Tigrillo - El Amor De Un Pobre.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "El Licenciado", artist: "Tigrillo Palma ", duration: "3:05", audioSrc: "Tigrillo - El Licenciado.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Y Andale", artist: "Tigrillo Palma ", duration: "2:45", audioSrc: "El Tigrillo Palma - Y Andale.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Los Pelones", artist: "Tigrillo Palma ", duration: "3:48", audioSrc: "Tigrillo - Los Pelones.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
             { title: "La Escalera", artist: "Tigrillo Palma ", duration: "2:09", audioSrc: "Tigrillo - La Escalera.mp3", imgSrc: "c-tigrillorandom4.jpg", genre: "CORRIDOS" },
            { title: "La Del Moño Colorado", artist: "Tigrillo Palma ", duration: "2:47", audioSrc: "Tigrillo - La Del Moño Colorado.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
             { title: "El Compa Yico", artist: "Tigrillo Palma ", duration: "2:41", audioSrc: "Tigrillo - El Compa Yico.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
             { title: "La Avioneta Robada", artist: "Tigrillo Palma ", duration: "3:06", audioSrc: "Tigrillo - La Avioneta Robada.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
             { title: "La Hummer De Culiacán", artist: "Tigrillo Palma ", duration: "2:26", audioSrc: "El Tigrillo Palma - La Hummer De Culiacan.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Siembra En La Sierra", artist: "Tigrillo Palma ", duration: "2:46", audioSrc: "EL TIGRILLO PALMA - SIEMBRA EN LA SIERRA.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Mi Guitarra Lloro", artist: "Tigrillo Palma ", duration: "4:16", audioSrc: "Tigrillo - Fiesta En La Sierra.mp3", imgSrc: "c-fiestaenlasierra.jpg", genre: "CORRIDOS" },
            { title: "Vengo A Ver Unos Ojos", artist: "Tigrillo Palma ", duration: "2:22", audioSrc: "El Tigrillo Palma - Vengo a Ver Unos Ojos.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "Me Gusta Tener De A Dos", artist: "Tigrillo Palma ", duration: "3:14", audioSrc: "El Tigrillo Palma - Me Gusta Tener De a Dos.mp3", imgSrc: "c-tigrillorandom4.jpg", genre: "CORRIDOS" },
            { title: "Entre Golpes Y Besos", artist: "Tigrillo Palma ", duration: "3:02", audioSrc: "EL TIGRILLO PALMA - Lyrics Entre Golpes Y besos.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" }
        ]},
        { name: "Chalino Sánchez", verified: true, imgSrc: "chalino.jpg", songs: [
            { title: "Nieves De Enero", artist: "Chalino Sanchez ", duration: "3:37", audioSrc: "Chalino - Nieves de Enero.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" },
            { title: "Alma Enamorada", artist: "Chalino Sanchez ", duration: "2:40", audioSrc: "Chalino - Alma Enamorada.mp3", imgSrc: "C-Chalino2.jpg", genre: "CORRIDOS" },
            { title: "Baraja De Oro", artist: "Chalino Sanchez ", duration: "3:30", audioSrc: "Chalino - Baraja de Oro.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "Los Chismes", artist: "Chalino Sanchez ", duration: "3:00", audioSrc: "Chalino - Los Chismes.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" },
            { title: "El Crimen de Culiacán", artist: "Chalino Sanchez ", duration: "3:11", audioSrc: "Chalino - El Crimen de Culiacán.mp3", imgSrc: "C-Chalino2.jpg", genre: "CORRIDOS" },
            { title: "Florita Del Alma", artist: "Chalino Sánchez ", duration: "2:56", audioSrc: "Chalino – Florita del Alma.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "Prenda Del Alma", artist: "Chalino Sanchez ", duration: "3:32", audioSrc: "Chalino – Prenda del Alma.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "El Pávido Návido", artist: "Chalino Sanchez ", duration: "2:56", audioSrc: "Chalino Sanchez - El Pávido Návido.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "El Navegante", artist: "Chalino Sanchez ", duration: "3:08", audioSrc: "Chalino Sánchez - El Navegante.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "Mario Peralta", artist: "Chalino Sanchez ", duration: "3:11", audioSrc: "Chalino Sánchez - Mario Peralta.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" },
            { title: "Tino Quintero", artist: "Chalino Sanchez ", duration: "3:47", audioSrc: "Chalino Sanchez - Tino Quintero.mp3", imgSrc: "C-Chalino2.jpg", genre: "CORRIDOS" },
            { title: "Carta De Luto", artist: "Chalino Sanchez ", duration: "3:01", audioSrc: "Chalino Sanchez - Carta de Luto.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "Ya Después De Muerto", artist: "Chalino Sánchez ", duration: "2:26", audioSrc: "Chalino Sánchez - Ya Después de Muerto.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "Nocturno A Rosario", artist: "Chalino Sanchez ", duration: "3:34", audioSrc: "Chalino Sánchez - Nocturno a Rosario.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "Anastasio Pacheco", artist: "Chalino Sanchez ", duration: "3:28", audioSrc: "Chalino Sánchez - Anastacio Pacheco.mp3", imgSrc: "C-Chalino2.jpg", genre: "CORRIDOS" },
            { title: "Corazoncito Tirano", artist: "Chalino Sanchez ", duration: "3:20", audioSrc: "Chalino Sánchez – Corazoncito Tirano.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" },
            { title: "Hermosísimo Lucero", artist: "Chalino Sanchez ", duration: "2:37", audioSrc: "CHALINO SÁNCHEZ - HERMOSISIMO LUCERO.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "Hermanos Mata", artist: "Chalino Sanchez ", duration: "3:50", audioSrc: "Chalino Sanchez - Hermanos Mata.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "Ramiro Sierra", artist: "Chalino Sanchez ", duration: "3:11", audioSrc: "Chalino Sanchez - Ramiro Sierra.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" },
            { title: "Rigo Campos", artist: "Chalino Sanchez ", duration: "3:41", audioSrc: "Chalino Sanchez - Rigo Campos.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "Armando Aguirre", artist: "Chalino Sánchez ", duration: "2:58", audioSrc: "Chalino Sánchez - Armando Aguirre.mp3", imgSrc: "C-Chalino2.jpg", genre: "CORRIDOS" },
            { title: "Coquio Castro", artist: "Chalino Sanchez ", duration: "3:41", audioSrc: "Chalino Sanchez - Coquio Castro.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" },
            { title: "El Pelavacas", artist: "Chalino Sanchez ", duration: "3:15", audioSrc: "Chalino Sanchez-El Pelavacas.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "Me Persigue Tu Sombra", artist: "Chalino Sanchez ", duration: "3:11", audioSrc: "Chalino Sanchez - Me Persigue Tu Sombra.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "Las Uvas", artist: "Chalino Sanchez ", duration: "3:02", audioSrc: "Chalino Sánchez - Las Uvas.mp3", imgSrc: "C-Chalino4.jpg", genre: "CORRIDOS" },
            { title: "Una Tarde", artist: "Chalino Sanchez ", duration: "3:08", audioSrc: "Chalino Sánchez – Una Tarde.mp3", imgSrc: "C-Chalino3.jpg", genre: "CORRIDOS" },
            { title: "La Ametralladora", artist: "Chalino Sanchez ", duration: "3:37", audioSrc: "Chalino Sánchez - La Ametralladora.mp3", imgSrc: "C-Chalino1.jpg", genre: "CORRIDOS" }
        ]},
        { name: "Luis R Conriquez", verified: true, imgSrc: "LuisR-Conriquez.jpg", songs: [
            { title: "El Bazucazo", artist: "Tigrillo Palma ", duration: "2:32", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg", genre: "CORRIDOS" },
            { title: "El 24", artist: "Tigrillo Palma ", duration: "2:32", audioSrc: "El Tigrillo - El 24.mp3", imgSrc: "c-el24.jpg", genre: "CORRIDOS" },
            { title: "Se Vale Soñar", artist: "Tigrillo Palma ", duration: "3:45", audioSrc: "El Tigrillo Palma - Se Vale Soñar.mp3", imgSrc: "c-sevalesoñar.jpg", genre: "CORRIDOS" },
            { title: "Tu Nuevo Cariñito", artist: "Tigrillo Palma ", duration: "3:05", audioSrc: "El Tigrillo - Tu Nuevo Cariñito.mp3", imgSrc: "c-tunuevocariñito.jpg", genre: "CORRIDOS" },
            { title: "La Piedrecita", artist: "Tigrillo Palma ", duration: "2:34", audioSrc: "Tigrillo - La Piedrecita.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "El Corrido Del Chapo", artist: "Tigrillo Palma ", duration: "2:46", audioSrc: "Tigrillo - El Corrido Del Chapo.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "El Güero Pesado", artist: "Tigrillo Palma ", duration: "3:32", audioSrc: "Tigrillo - El Guero Pesado.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Paloma Azul", artist: "Tigrillo Palma ", duration: "3:48", audioSrc: "Tigrillo - Paloma Azul.mp3", imgSrc: "c-el24.jpg", genre: "CORRIDOS" },
            { title: "Los Chiquinarcos", artist: "Tigrillo Palma ", duration: "2:39", audioSrc: "Tigrillo - Los Chiquinarcos.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "La Tetona", artist: "Tigrillo Palma ", duration: "2:39", audioSrc: "Tigrillo - La Tetona.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Fiesta En La Sierra", artist: "Tigrillo Palma ", duration: "3:04", audioSrc: "Tigrillo - Fiesta En La Sierra.mp3", imgSrc: "c-fiestaenlasierra.jpg", genre: "CORRIDOS" },
            { title: "Vida De Mi Vida", artist: "Tigrillo Palma ", duration: "2:013", audioSrc: "EL TIGRILLO PALMA - VIDA DE MI VIDA.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "15 Años de Prisión", artist: "Tigrillo Palma ", duration: "2:57", audioSrc: "Tigrillo - 15 Años De Prisión.mp3", imgSrc: "c-tigrillorandom4.jpg", genre: "CORRIDOS" },
            { title: "El 80", artist: "Tigrillo Palma ", duration: "2:40", audioSrc: "Tigrillo - El 80.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Alegre Me Ando Paseando", artist: "Tigrillo Palma ", duration: "2:19", audioSrc: "Tigrillo - Alegre Me Ando Paseando.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "El Amor De Un Pobre", artist: "Tigrillo Palma ", duration: "2:40", audioSrc: "Tigrillo - El Amor De Un Pobre.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "El Licenciado", artist: "Tigrillo Palma ", duration: "3:05", audioSrc: "Tigrillo - El Licenciado.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Y Andale", artist: "Tigrillo Palma ", duration: "2:45", audioSrc: "El Tigrillo Palma - Y Andale.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "iMusic Pro", artist: "Creado por Juan Zamora", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg", genre: "Pop" },
             { title: "iMusic Pro2", artist: "Creado por Juan Zamora", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg", genre: "Pop" },
            { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" },
             { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" },
             { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" }
        ]},
        { name: "Los Plebes Del Rancho", verified: true, imgSrc: "LosPlebesDelRancho.jpg", songs: [
            { title: "El Bazucazo", artist: "Tigrillo Palma ", duration: "2:32", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg", genre: "CORRIDOS" },
            { title: "El 24", artist: "Tigrillo Palma ", duration: "2:32", audioSrc: "El Tigrillo - El 24.mp3", imgSrc: "c-el24.jpg", genre: "CORRIDOS" },
            { title: "Se Vale Soñar", artist: "Tigrillo Palma ", duration: "3:45", audioSrc: "El Tigrillo Palma - Se Vale Soñar.mp3", imgSrc: "c-sevalesoñar.jpg", genre: "CORRIDOS" },
            { title: "Tu Nuevo Cariñito", artist: "Tigrillo Palma ", duration: "3:05", audioSrc: "El Tigrillo - Tu Nuevo Cariñito.mp3", imgSrc: "c-tunuevocariñito.jpg", genre: "CORRIDOS" },
            { title: "La Piedrecita", artist: "Tigrillo Palma ", duration: "2:34", audioSrc: "Tigrillo - La Piedrecita.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "El Corrido Del Chapo", artist: "Tigrillo Palma ", duration: "2:46", audioSrc: "Tigrillo - El Corrido Del Chapo.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "El Güero Pesado", artist: "Tigrillo Palma ", duration: "3:32", audioSrc: "Tigrillo - El Guero Pesado.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Paloma Azul", artist: "Tigrillo Palma ", duration: "3:48", audioSrc: "Tigrillo - Paloma Azul.mp3", imgSrc: "c-el24.jpg", genre: "CORRIDOS" },
            { title: "Los Chiquinarcos", artist: "Tigrillo Palma ", duration: "2:39", audioSrc: "Tigrillo - Los Chiquinarcos.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "La Tetona", artist: "Tigrillo Palma ", duration: "2:39", audioSrc: "Tigrillo - La Tetona.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Fiesta En La Sierra", artist: "Tigrillo Palma ", duration: "3:04", audioSrc: "Tigrillo - Fiesta En La Sierra.mp3", imgSrc: "c-fiestaenlasierra.jpg", genre: "CORRIDOS" },
            { title: "Vida De Mi Vida", artist: "Tigrillo Palma ", duration: "2:013", audioSrc: "EL TIGRILLO PALMA - VIDA DE MI VIDA.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "15 Años de Prisión", artist: "Tigrillo Palma ", duration: "2:57", audioSrc: "Tigrillo - 15 Años De Prisión.mp3", imgSrc: "c-tigrillorandom4.jpg", genre: "CORRIDOS" },
            { title: "El 80", artist: "Tigrillo Palma ", duration: "2:40", audioSrc: "Tigrillo - El 80.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Alegre Me Ando Paseando", artist: "Tigrillo Palma ", duration: "2:19", audioSrc: "Tigrillo - Alegre Me Ando Paseando.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "El Amor De Un Pobre", artist: "Tigrillo Palma ", duration: "2:40", audioSrc: "Tigrillo - El Amor De Un Pobre.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
            { title: "El Licenciado", artist: "Tigrillo Palma ", duration: "3:05", audioSrc: "Tigrillo - El Licenciado.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
            { title: "Y Andale", artist: "Tigrillo Palma ", duration: "2:45", audioSrc: "El Tigrillo Palma - Y Andale.mp3", imgSrc: "c-tigrillorandom2.jpg", genre: "CORRIDOS" },
            { title: "Los Pelones", artist: "Tigrillo Palma ", duration: "3:48", audioSrc: "Tigrillo - Los Pelones.mp3", imgSrc: "c-tigrillorandom3.jpg", genre: "CORRIDOS" },
             { title: "La Escalera", artist: "Tigrillo Palma ", duration: "2:09", audioSrc: "Tigrillo - La Escalera.mp3", imgSrc: "c-tigrillorandom4.jpg", genre: "CORRIDOS" },
            { title: "La Del Moño Colorado", artist: "Tigrillo Palma ", duration: "2:47", audioSrc: "Tigrillo - La Del Moño Colorado.mp3", imgSrc: "c-tigrillorandom.jpg", genre: "CORRIDOS" },
             { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" },
             { title: "El Bazucazo", duration: "3:45", audioSrc: "El Tigrillo Palma - El Bazucazo.mp3", imgSrc: "c-elbazucazo.jpg" }
        ]}
    ],
    "Rap": [
        { name: "Under Side", verified: true, imgSrc: "UnderSide.jpg", songs: [
            { title: "Verso Uno", duration: "4:30", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" },
            { title: "Flow Eterno", duration: "3:10", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Cartel De Santa", verified: true, imgSrc: "CartelDeSanta.jpg", songs: [
            { title: "Ritmo Callejero", duration: "3:50", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Cancerbero", verified: true, imgSrc: "Cancerbero.jpg", songs: [
            { title: "Pensando En Ti", artist: "Canserbero ", duration: "3:34", audioSrc: "Canserbero-Pensando En Ti.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Mundo De Piedra", artist: "Canserbero ", duration: "4:37", audioSrc: "Canserbero - Mundo de Piedra [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
            { title: "Maquiavélico", artist: "Canserbero ", duration: "4:35", audioSrc: "Canserbero - Maquiavélico.mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
            { title: "Es Épico", artist: "Canserbero ", duration: "6:00", audioSrc: "canserbero - Es epico.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "Visiones", artist: "Canserbero ", duration: "4:10", audioSrc: "Canserbero - Visiones.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Querer Querernos", artist: "Canserbero ", duration: "3:59", audioSrc: "Canserbero - Querer Querernos.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "Jeremías 17:5", artist: "Canserbero ", duration: "5:22", audioSrc: "Canserbero - Jeremías 175.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Cuando Vayas Conmigo", artist: "Canserbero ", duration: "4:31", audioSrc: "Canserbero - Cuando Vayas Conmigo.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "El Primer Trago", artist: "Canserbero ", duration: "6:25", audioSrc: "Canserbero - El primer trago.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Perdiendo La Fé", artist: "Canserbero ", duration: "4:27", audioSrc: "Canserbero - Perdiendo la Fé [Vida].mp3", imgSrc: "canserberovida.jpg", genre: "RAP" },
            { title: "Llovía", artist: "Canserbero ", duration: "4:52", audioSrc: "Canserbero - Llovia.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "La Ley Del Hielo", artist: "Canserbero ", duration: "3:33", audioSrc: "Canserbero - Ley del hielo.mp3", imgSrc: "canserberovida.jpg", genre: "RAP" },
            { title: "Tiempos De Cambio", artist: "Canserbero ", duration: "4:08", audioSrc: "Canserbero - Tiempos de Cambio.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "De La Vida Como Película Y Su Tragedia Comedia Y Ficcción", artist: "Canserbero ", duration: "7:26", audioSrc: "Canserbero - De la vida como película y su tragedia comedia y ficción.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "Y En Un Espejo Vi", artist: "Canserbero ", duration: "4:53", audioSrc: "Canserbero - Y en un Espejo Vi [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
            { title: "Buenas Noches", artist: "Canserbero ", duration: "3:58", audioSrc: "Canserbero - buenas noches.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "Caras Vemos Corazones No Sabemos", artist: "Canserbero ", duration: "4:42", audioSrc: "Canserbero - Caras vemos corazones no sabemos.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Mañana Será Otro Dia", artist: "Canserbero ", duration: "2:58", audioSrc: "Canserbero - Mañana será otro dia.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "La Hora Del Juicio", artist: "Canserbero ", duration: "3:53", audioSrc: "Canserbero - La Hora del Juicio [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
             { title: "En El Valle De Las Sombras", artist: "Canserbero ", duration: "5:41", audioSrc: "Canserbero - En el Valle de las Sombras [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
            { title: "Ser Vero", artist: "Canserbero ", duration: "3:39", audioSrc: "Canserbero - Ser Vero [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
             { title: "C'est La Mort", artist: "Canserbero ", duration: "7:40", audioSrc: "Canserbero - C'est la Mort [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
             { title: "De Mi Muerte", artist: "Canserbero ", duration: "3:42", audioSrc: "Canserbero - De Mi Muerte [Muerte].mp3", imgSrc: "canserberomuerte.jpg", genre: "RAP" },
             { title: "Estúpida Historia De Amor", artist: "Canserbero ", duration: "4:14", audioSrc: "Canserbero - Estúpida historia de amor letra.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Mi Pobre Gente Pobre", artist: "Canserbero ", duration: "4:10", audioSrc: "Canserbero - Mi Pobre Gente Pobre.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "Tripolar", artist: "Canserbero ", duration: "4:35", audioSrc: "Canserbero- Tripolar.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" },
            { title: "Rencor A La Vida", artist: "Canserbero ", duration: "3:17", audioSrc: "Canserbero - Rencor a la vida.mp3", imgSrc: "canserbero1.jpg", genre: "RAP" },
            { title: "Quisiera", artist: "Canserbero ", duration: "4:10", audioSrc: "Canserbero - Quisiera.mp3", imgSrc: "canserbero2.jpg", genre: "RAP" }
        ]},
        { name: "Soldados Del Reyno", verified: true, imgSrc: "SoldadosDelReyno.jpg", songs: [
            { title: "Micrófono Abierto", duration: "3:30", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]}
    ],
    "Reggaeton": [
        { name: "Bad Bunny", verified: true, imgSrc: "BadBunny.jpg", songs: [
            { title: "Dembow Veraniego", duration: "3:20", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "Karol G", verified: true, imgSrc: "Karol G.jpg", songs: [
            { title: "Pista de Pista", duration: "2:50", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Bellakath", verified: true, imgSrc: "Bellakath.jpg", songs: [
            { title: "Lento y Suave", duration: "3:45", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]}
    ],
    "Cumbia": [
        { name: "Raymix", verified: true, imgSrc: "raymix.jpg", songs: [
            { title: "El Baile del Sol", duration: "3:00", audioSrc: "musica-de-prueba.mp3", imgSrc: "caratula-prueba.jpg" }
        ]},
        { name: "Los Akis", verified: true, imgSrc: "LosAkis.jpg", songs: [
            { title: "Sonido Alegre", duration: "3:25", audioSrc: "musica-de-prueba-2.mp3", imgSrc: "caratula-prueba-2.jpg" }
        ]},
        { name: "Los Angeles Azules", verified: true, imgSrc: "LosAngelesAzules.jpg", songs: [
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

// Array de colores para el fondo del reproductor (sin cambios)
const playerBackgroundColors = [
    '#6A1B9A', '#C2185B', '#00897B', '#3949AB', '#D84315',
    '#004D40', '#E91E63', '#FF7043', '#4527A0', '#2E7D32',
    '#1565C0', '#FBC02D', '#5D4037', '#7CB342', '#F4511E',
    '#8BC34A', '#00BCD4', '#AB47BC', '#FFCA28', '#607D8B'
];

// --- Elementos del DOM ---
const loginView = document.getElementById('loginView'); 
const loginForm = document.getElementById('loginForm'); 
const loginMessage = document.getElementById('loginMessage'); 

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
const logoutBtn = document.getElementById('logoutBtn'); 
const queueBtn = document.getElementById('queueBtn'); 
const timerBtn = document.getElementById('timerBtn'); 

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
const mainArtistEl = document.getElementById('mainArtist');
const miniArtEl = document.getElementById('miniArt');
const miniArtistEl = document.getElementById('miniArtist');


// --- Estados y Datos ---
let currentSongIndex = 0;
let isSeeking = false; 
let currentPlaylist = []; 
let originalPlaylist = []; 
let favoritesList = []; 
let currentUserId = null; 
let currentGenreContext = null; 
let sleepTimerId = null; 
let timerIntervalId = null; 
let timerEndTime = null; 
let isRepeating = false; 

const CACHE_NAME = 'imusic-favorites-v1'; // Nombre único para el caché

const initialPlaylist = [
    { title: "Bienvenidos a iMusic", artist: "¡Disfruta Tu Música Favorita!", duration: "2:00", audioSrc: "Cancion-Inicial.mp3", imgSrc: "foto-inicial.png", genre: "Pop" }
];
originalPlaylist = initialPlaylist;
currentPlaylist = [...initialPlaylist]; 

const VALID_USERS = [
    { user: 'axeso5115', pass: 'tokio.01', email: 'mrandroidtutorialeshd@gmail.com' },
    { user: 'crisleo', pass: 'leon25100', email: 'juanzamora2025a@gmail.com' },
    { user: 'prueba', pass: 'prueba', email: 'facebook2100198@gmail.com' },
    { user: 'yesi', pass: 'yesi.01', email: 'escuelas100198@gmail.com' },
    { user: 'ely', pass: 'zamora', email: 'juanzamora2025a+1@gmail.com' },
];


// --- LÓGICA DE CACHE OFFLINE (NUEVO) ---

/**
 * Guarda el archivo de audio y la imagen en el Cache API.
 * @param {Object} songData - Datos de la canción (audioSrc, imgSrc).
 */
async function cacheSongForOffline(songData) {
    if (!('caches' in window)) return;

    try {
        const cache = await caches.open(CACHE_NAME);
        const filesToCache = [];
        
        if (songData.audioSrc && songData.audioSrc.includes('.mp3')) {
            filesToCache.push(songData.audioSrc);
        }
        if (songData.imgSrc && songData.imgSrc.includes('.jpg')) {
            filesToCache.push(songData.imgSrc);
        }

        if (filesToCache.length > 0) {
            // Promise.all espera a que se guarden todos los archivos
            await cache.addAll(filesToCache);
            console.log(`Archivos de ${songData.title} guardados en caché para modo offline.`);
        }
    } catch (error) {
        console.error("Error al guardar en caché:", error);
    }
}

/**
 * Elimina el archivo de audio y la imagen del Cache API.
 * @param {Object} songData - Datos de la canción (audioSrc, imgSrc).
 */
async function uncacheSong(songData) {
    if (!('caches' in window)) return;

    try {
        const cache = await caches.open(CACHE_NAME);
        
        let deletedCount = 0;
        if (songData.audioSrc) {
            if (await cache.delete(songData.audioSrc)) deletedCount++;
        }
        if (songData.imgSrc) {
            if (await cache.delete(songData.imgSrc)) deletedCount++;
        }

        if (deletedCount > 0) {
            console.log(`Archivos de ${songData.title} eliminados del caché.`);
        }
    } catch (error) {
        console.error("Error al eliminar del caché:", error);
    }
}

// --- Persistencia y Favoritos (MODIFICADO) ---

function saveFavorites() {
    if (currentUserId) {
        localStorage.setItem(`iMusicFavorites_${currentUserId}`, JSON.stringify(favoritesList));
    }
}

function loadFavorites(userId) {
    currentUserId = userId;
    const savedFavorites = localStorage.getItem(`iMusicFavorites_${userId}`);
    if (savedFavorites) {
        try {
            favoritesList = JSON.parse(savedFavorites);
        } catch (e) {
            favoritesList = [];
        }
    } else {
        favoritesList = [];
    }
    checkFavoriteState(); 
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

function handleLike() {
    if (!currentUserId) {
        alert("Debes iniciar sesión para guardar favoritos.");
        return;
    }

    const isLiked = fullHeart.classList.contains('liked');
    const currentSongData = currentPlaylist[currentSongIndex];
    const songId = currentSongData.title + currentSongData.artist;

    if (isLiked) {
        // Quitar de favoritos (y del caché)
        favoritesList = favoritesList.filter(s => (s.title + s.artist) !== songId);
        fullHeart.classList.remove('liked');
        miniHeart.classList.remove('liked');
        uncacheSong(currentSongData); // ⬅️ ELIMINAR DEL CACHÉ
        alert(`"${currentSongData.title}" eliminado de favoritos (y del caché offline).`);
    } else {
        // Agregar a favoritos (y al caché)
        if (!favoritesList.some(s => (s.title + s.artist) === songId)) {
            favoritesList.push(currentSongData);
        }
        fullHeart.classList.add('liked');
        miniHeart.classList.add('liked');
        cacheSongForOffline(currentSongData); // ⬅️ AGREGAR AL CACHÉ
        alert(`"${currentSongData.title}" guardado en favoritos (y disponible offline).`);
    }
    saveFavorites();
}

// --- LÓGICA DE SESIÓN (sin cambios) ---

function setSessionState(isLoggedIn, user = null) {
    if (isLoggedIn) {
        const userId = user.user;
        
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUserId', userId); 
        
        loadFavorites(userId); 
        
        loginView.classList.add('hidden');
        genresView.classList.remove('hidden');
        miniPlayer.classList.remove('hidden');
        logoutBtn.classList.remove('hidden'); 
        
        loadSong(currentSongIndex, false); 
        renderGenres(); 
    } else {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('currentUserId');
        currentUserId = null; 
        favoritesList = []; 
        
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        if(usernameInput) usernameInput.value = '';
        if(passwordInput) passwordInput.value = '';
        loginMessage.textContent = ''; 
        loginMessage.classList.add('hidden');

        genresView.classList.add('hidden');
        fullPlayer.classList.add('hidden');
        miniPlayer.classList.add('hidden');
        logoutBtn.classList.add('hidden');
        loginView.classList.remove('hidden');
    }
}

function handleLogin(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();

    const userFound = VALID_USERS.find(user => 
        (user.user === usernameInput || user.email === usernameInput) && user.pass === passwordInput
    );

    loginMessage.classList.remove('hidden');
    
    if (userFound) {
        loginMessage.textContent = `¡Inicio de sesión exitoso! Bienvenido, ${userFound.user}.`;
        loginMessage.classList.remove('error');
        
        setTimeout(() => {
            setSessionState(true, userFound); 
        }, 1000);
        
    } else {
        loginMessage.textContent = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
        loginMessage.classList.add('error');
    }
}

function handleLogout() {
    setSessionState(false);
}


// --- Lógica de BÚSQUEDA (sin cambios) ---

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


// --- Lógica de VISTAS Y MODALES (sin cambios funcionales importantes) ---

function openModal(title, contentHTML) {
    modalTitle.innerHTML = title;
    modalBody.innerHTML = contentHTML;
    appModal.classList.remove('hidden');
}

function closeModal() {
    appModal.classList.add('hidden');
    modalBody.innerHTML = '';
}

function renderArtistsModal(genre) {
    currentGenreContext = genre;
    
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

    modalTitle.innerHTML = `<i class="fas fa-chevron-left modal-back-btn"></i> ${artistName}`;
    document.getElementById('closeModalBtn').style.display = 'block'; 

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

    modalBody.innerHTML = htmlContent;
    appModal.classList.remove('hidden');

    const backBtn = document.querySelector('#appModal .modal-header .modal-back-btn');
    if (backBtn) {
        const newBackBtn = backBtn.cloneNode(true);
        backBtn.parentNode.replaceChild(newBackBtn, backBtn);
        
        newBackBtn.addEventListener('click', () => {
            if (currentGenreContext) {
                renderArtistsModal(currentGenreContext);
            } else {
                closeModal(); 
            }
        });
    }

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
    const genres = Object.keys(fullMusicData);

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
        htmlContent = `<p style="color:var(--spotify-light-gray); text-align:center;">Aún no tienes canciones favoritas. Toca el corazón en el reproductor para agregarlas.</p>`;
    } else {
        let favoritePlaylist = favoritesList; 
        
        htmlContent += '<div class="song-list">';
        favoritePlaylist.forEach((song, index) => {
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
            
            originalPlaylist = favoritesList;
            currentPlaylist = [...favoritesList]; 

            loadSong(favoriteIndex, true); 
            
            closeModal();
            togglePlayerView(true);
        });
    });
}

/**
 * Renderiza el modal con la cola de reproducción actual.
 */
function renderQueueModal() {
    let htmlContent = '';

    // Si el temporizador está activo, muestra la cuenta regresiva y el botón de cancelar
    if (sleepTimerId && timerEndTime) {
        updateTimerDisplay(); 

        const timeRemaining = Math.max(0, timerEndTime - Date.now());
        const minutes = Math.floor(timeRemaining / 60000);
        const seconds = Math.floor((timeRemaining % 60000) / 1000);

        htmlContent += `
            <div class="timer-remaining-time">
                ${minutes}:${seconds.toString().padStart(2, '0')}<span>minutos restantes</span>
            </div>
            <button class="timer-option-btn cancel" data-duration="0" style="margin-bottom: 20px;">
                Cancelar Temporizador
            </button>
        `;
    } else {
         htmlContent += `
            <p style="color: var(--spotify-light-gray); text-align: center; margin-bottom: 20px;">
                Temporizador de sueño inactivo.
            </p>
         `;
    }

    htmlContent += '<h3 style="color: var(--spotify-white); margin-bottom: 10px;">Cola de Reproducción</h3>';
    htmlContent += '<div class="song-list">';

    currentPlaylist.forEach((song, index) => {
        const isCurrent = index === currentSongIndex;
        const subtitle = `${song.artist} · ${song.duration || '0:00'}`;
        
        const className = isCurrent ? 'modal-item song-item queue-item current-song' : 'modal-item song-item queue-item';

        htmlContent += `
            <div class="${className}" data-queue-index="${index}">
                <div class="item-art song-item-art" style="background-image: url('${song.imgSrc}')"></div>
                <div class="modal-item-info">
                    <span class="item-title">${song.title}</span>
                    <span class="item-subtitle">${subtitle}</span>
                </div>
            </div>
        `;
    });
    htmlContent += '</div>';

    openModal(`Cola de Reproducción`, htmlContent);

    document.querySelectorAll('.queue-item').forEach(item => {
        item.addEventListener('click', () => {
            const queueIndex = parseInt(item.dataset.queueIndex);
            
            loadSong(queueIndex, true); 
            renderQueueModal(); 
        });
    });

    const cancelTimerBtn = document.querySelector('.timer-option-btn.cancel');
    if (cancelTimerBtn) {
        cancelTimerBtn.addEventListener('click', () => {
            setSleepTimer(0);
            renderQueueModal(); 
        });
    }
}

// ⬇️ LÓGICA DEL TEMPORIZADOR (sin cambios) ⬇️

const timerOptions = {
    10: '10 minutos',
    30: '30 minutos',
    60: '1 hora',
    180: '3 horas'
};

function updateTimerDisplay() {
    const timeDisplay = document.querySelector('.timer-remaining-time');
    
    if (!sleepTimerId || !timerEndTime) {
        if (timerIntervalId) {
            clearInterval(timerIntervalId);
            timerIntervalId = null;
        }
        
        if (timeDisplay && !sleepTimerId) {
             timeDisplay.remove();
        }
        return;
    }

    const timeRemaining = Math.max(0, timerEndTime - Date.now());
    const minutes = Math.floor(timeRemaining / 60000);
    const seconds = Math.floor((timeRemaining % 60000) / 1000);

    if (timeDisplay) {
        timeDisplay.innerHTML = `${minutes}:${seconds.toString().padStart(2, '0')}<span>minutos restantes</span>`;
    }
    
    if (timeRemaining === 0 && timerIntervalId) {
        clearInterval(timerIntervalId);
        timerIntervalId = null;
        timerEndTime = null;
    }
}

function renderSelectTimerModal() {
    let htmlContent = `
        <p style="color: var(--spotify-light-gray); text-align: center; margin-bottom: 20px;">
            Programa la detención automática de la música.
        </p>
    `;

    if (sleepTimerId && timerEndTime) {
         const timeRemaining = Math.max(0, timerEndTime - Date.now());
         const minutes = Math.ceil(timeRemaining / 60000);

         htmlContent += `
            <div class="timer-remaining-time">
                ${minutes}<span>minutos restantes</span>
            </div>
            <button class="timer-option-btn cancel" data-duration="0" style="margin-bottom: 20px;">
                Cancelar Temporizador
            </button>
         `;
    }

    htmlContent += `<div class="timer-options" style="display:flex; flex-direction:column; gap:10px;">`;
    for (const minutes in timerOptions) {
        htmlContent += `
            <button class="timer-option-btn" data-duration="${minutes}">
                ${timerOptions[minutes]}
            </button>
        `;
    }
    
    htmlContent += '</div>';
    
    openModal("Temporizador de Sueño", htmlContent);
    
    document.querySelectorAll('.timer-option-btn').forEach(button => {
        button.addEventListener('click', () => {
            const duration = parseInt(button.dataset.duration);
            setSleepTimer(duration);
            closeModal();
        });
    });
    
    if (sleepTimerId && timerEndTime) {
        updateTimerDisplay();
        if (!timerIntervalId) {
            timerIntervalId = setInterval(updateTimerDisplay, 1000);
        }
    }
}

function setSleepTimer(durationInMinutes) {
    if (sleepTimerId) clearTimeout(sleepTimerId);
    if (timerIntervalId) clearInterval(timerIntervalId);

    sleepTimerId = null;
    timerIntervalId = null;
    timerEndTime = null;

    if (durationInMinutes === 0) {
        alert("Temporizador cancelado.");
        return;
    }

    const durationInMilliseconds = durationInMinutes * 60 * 1000;
    timerEndTime = Date.now() + durationInMilliseconds;
    
    sleepTimerId = setTimeout(() => {
        if (!audioPlayer.paused) {
            audioPlayer.pause();
            updatePlayPauseIcons(false);
            alert("Música detenida por temporizador.");
        }
        sleepTimerId = null;
        timerEndTime = null;
        updateTimerDisplay();
    }, durationInMilliseconds);

    timerIntervalId = setInterval(updateTimerDisplay, 1000); 

    alert(`Temporizador configurado: La música se detendrá en ${durationInMinutes} minutos.`);
}
// ⬆️ FIN LÓGICA DEL TEMPORIZADOR ⬆️


// --- Lógica de Reproductor y Utilidades (MODIFICADO) ---

async function loadSong(index, autoPlay = false) {
    currentSongIndex = index;
    
    if (currentSongIndex < 0 || currentSongIndex >= currentPlaylist.length) {
        currentSongIndex = 0; 
    }
    
    const songData = currentPlaylist[currentSongIndex];
    
    if (!songData) return;

    const fullSongData = {
        ...songData,
        audioSrc: songData.audioSrc || 'musica-de-prueba.mp3', 
        imgSrc: songData.imgSrc || 'caratula-prueba.jpg',
        genre: songData.genre || 'Álbum Genérico',
        artist: songData.artist || 'Artista Ejemplo'
    };
    
    // ⬅️ LÓGICA DE CACHE API PARA REPRODUCCIÓN OFFLINE 
    let finalAudioSrc = fullSongData.audioSrc;
    let finalImgSrc = fullSongData.imgSrc;
    
    if ('caches' in window) {
        try {
            const cache = await caches.open(CACHE_NAME);
            
            // 1. Verificar si el audio está en caché
            let audioResponse = await cache.match(fullSongData.audioSrc);
            if (audioResponse) {
                // Si está en caché, usa la URL de la caché (no es necesario cambiar la URL, el navegador lo manejará)
                console.log(`Audio de ${fullSongData.title} cargado desde el caché.`);
            } else {
                // console.log(`Audio de ${fullSongData.title} no está en caché. Cargando desde la red.`);
            }

            // 2. Verificar si la imagen está en caché (Esto es para asegurar que la carátula se muestre offline)
            let imgResponse = await cache.match(fullSongData.imgSrc);
            if (imgResponse) {
                // Si la imagen está en caché, podemos crear una URL blob si queremos, pero usar la URL original también funciona 
                // si el Service Worker (que no implementamos aquí) intercepta la petición.
                // Para simplificar, confiamos en que el navegador servirá el archivo desde el caché.
            }
            
        } catch (error) {
            console.warn("Error al buscar en caché, cargando recursos por defecto.", error);
        }
    }
    
    // Asignar los recursos (el navegador intentará resolverlos, usando la caché si están allí)
    audioPlayer.src = finalAudioSrc;
    fullSongData.audioSrc = finalAudioSrc;
    fullSongData.imgSrc = finalImgSrc;
    // ⬆️ FIN LÓGICA DE CACHE API ⬆️
    
    updateUI(fullSongData);
    
    changePlayerBackground(); 

    checkFavoriteState(); 

    if (autoPlay) {
        audioPlayer.play();
        updatePlayPauseIcons(true);
    } else {
        audioPlayer.pause();
        updatePlayPauseIcons(false);
    }
}


// --- Resto de funciones (sin cambios funcionales) ---

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
    
    if (isPlaying) {
        miniPlayer.classList.add('is-playing');
    } else {
        miniPlayer.classList.remove('is-playing');
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function changePlayerBackground() {
    const randomIndex = Math.floor(Math.random() * playerBackgroundColors.length);
    const selectedColor = playerBackgroundColors[randomIndex];
    
    fullPlayer.style.background = `linear-gradient(to bottom, ${selectedColor}, var(--spotify-black))`;
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

function toggleShuffle() {
    shuffleBtn.classList.toggle('active');
    
    if (shuffleBtn.classList.contains('active')) {
        if (originalPlaylist.length === 0) originalPlaylist = [...currentPlaylist]; 
        
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
    isRepeating = !isRepeating;
}

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
    if (!isNaN(audioPlayer.duration)) {
        audioPlayer.currentTime = newTime;
    }
    
    document.getElementById('miniProgressBar').style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
}

let touchStartX = 0;
const swipeThreshold = 50; 

function getClientX(e) {
    if (e.touches && e.touches.length > 0) {
        return e.touches[0].clientX;
    }
    return e.clientX;
}

function handleTouchStart(e) {
    if (e.touches && e.touches.length > 0) {
        e.preventDefault();
        touchStartX = getClientX(e);
    } else {
        touchStartX = getClientX(e);
    }

    const moveEvent = e.touches ? 'touchmove' : 'mousemove';
    const endEvent = e.touches ? 'touchend' : 'mouseup';
    
    document.addEventListener(moveEvent, handleTouchMove);
    document.addEventListener(endEvent, handleTouchEnd);
}

function handleTouchMove(e) {
    if (touchStartX === 0) return;
    
    const currentX = getClientX(e);
    const diff = currentX - touchStartX;
    
    albumArtEl.style.transform = `translateX(${diff}px)`;

    if (e.cancelable && Math.abs(diff) > 10) {
        e.preventDefault(); 
    }
}

function handleTouchEnd(e) {
    let endX;
    if (e.changedTouches && e.changedTouches.length > 0) {
        endX = e.changedTouches[0].clientX;
    } else {
        endX = getClientX(e); 
    }

    if (touchStartX === 0) return;
    
    const diff = endX - touchStartX;

    albumArtEl.style.transform = `translateX(0)`;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            skipSong(-1); 
        }
        else {
            skipSong(1);
        }
    }

    touchStartX = 0;
    document.removeEventListener('mousemove', handleTouchMove);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('mouseup', handleTouchEnd);
    document.removeEventListener('touchend', handleTouchEnd);
}


// --- Event Listeners Globales ---

document.addEventListener('DOMContentLoaded', () => {
    
    const storedUserId = localStorage.getItem('currentUserId');
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (isLoggedIn && storedUserId) {
        setSessionState(true, { user: storedUserId }); 
    } else {
        setSessionState(false);
    }
    
    loadSong(0, false); 
    renderGenres(); 
    miniPlayer.classList.remove('hidden');

    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    
    loginForm.addEventListener('submit', handleLogin); 
    document.getElementById('logoutBtn').addEventListener('click', handleLogout); 
    
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    document.getElementById('homeBtn').addEventListener('click', () => togglePlayerView(false));
    document.getElementById('homeBtnSearch').addEventListener('click', () => {
        searchInput.value = '';
        handleSearch(''); 
    });
    document.getElementById('addMusicBtn').addEventListener('click', () => {
        window.open('https://wa.me/5215512345678?text=Hola! Me gustaría sugerir música para agregar a iMusic.', '_blank');
    });

    miniPlayer.addEventListener('click', (e) => {
        if (e.target.closest('.mini-controls')) {
            return; 
        }
        togglePlayerView(true);
    });
    
    document.getElementById('minimizeBtn').addEventListener('click', () => togglePlayerView(false));


    document.getElementById('playPauseBtn').addEventListener('click', handlePlayPause);
    document.getElementById('miniPlayPauseBtn').addEventListener('click', handlePlayPause);
    document.getElementById('nextBtn').addEventListener('click', () => skipSong(1));
    document.getElementById('miniNextBtn').addEventListener('click', () => skipSong(1)); 
    document.getElementById('prevBtn').addEventListener('click', () => skipSong(-1));
    document.getElementById('shuffleBtn').addEventListener('click', () => toggleShuffle());
    // document.getElementById('repeatBtn').addEventListener('click', () => toggleRepeat()); // Deshabilitado

    if (timerBtn) {
        timerBtn.addEventListener('click', renderSelectTimerModal);
    }
    
    document.getElementById('queueBtn').addEventListener('click', renderQueueModal);
    document.getElementById('favoritesBtn').addEventListener('click', renderFavoritesModal);
    document.getElementById('fullHeart').addEventListener('click', handleLike);
    document.getElementById('miniHeart').addEventListener('click', handleLike);

    progressBarContainer.addEventListener('mousedown', startSeek);
    progressBarContainer.addEventListener('touchstart', startSeek, { passive: true });

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
        if (isRepeating) { 
            audioPlayer.currentTime = 0;
            audioPlayer.play();
        } else {
            skipSong(1); 
        }
    });
    
    albumArtEl.addEventListener('touchstart', handleTouchStart);
    albumArtEl.addEventListener('mousedown', handleTouchStart);
});
