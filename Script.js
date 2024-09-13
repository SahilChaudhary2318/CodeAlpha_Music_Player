const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
const songItems = document.querySelectorAll('.song-item');

const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        file: 'songs/song1.mp3',
        cover: 'cover1.jpg'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        file: 'songs/song2.mp3',
        cover: 'cover2.jpg'
    },
    {
        title: 'Song 3',
        artist: 'Artist 3',
        file: 'songs/song3.mp3',
        cover: 'cover3.jpg'
    }
];

let songIndex = 0;

function loadSong(song) {
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    audioPlayer.src = song.file;
}

loadSong(songs[songIndex]);

function playSong() {
    audioPlayer.play();
    playPauseBtn.textContent = '⏸️';
}

function pauseSong() {
    audioPlayer.pause();
    playPauseBtn.textContent = '▶️';
}

playPauseBtn.addEventListener('click', () => {
    const isPlaying = !audioPlayer.paused;
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

nextBtn.addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

prevBtn.addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
});

songItems.forEach(item => {
    item.addEventListener('click', function() {
        songIndex = parseInt(this.getAttribute('data-index'));
        loadSong(songs[songIndex]);
        playSong();
    });
});

audioPlayer.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audioPlayer.currentTime);
    const duration = formatTime(audioPlayer.duration);

    currentTimeElem.textContent = currentTime;
    durationElem.textContent = duration ? duration : '00:00';
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
