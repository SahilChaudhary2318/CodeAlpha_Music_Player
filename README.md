Music Player:

A simple and modern web-based music player built using HTML, CSS, and JavaScript. The music player features a gallery of songs where each song is displayed with its cover. When a song is selected, the player at the bottom of the screen allows users to play, pause, skip to the next or previous song, and view the song information.

Features:
Responsive Song Gallery: Displays a gallery of songs with cover images.
Play/Pause Functionality: Toggle between play and pause states.
Next/Previous Song Navigation: Skip to the next or previous song in the playlist.
Dynamic Song Information: Updates song title and artist as the user navigates through songs.
Progress Timer: Displays the current time and total duration of the song.

Live Demo:
You can view a live demo of the project here.


Project Structure
/my-music-gallery/
    ├── index.html         # HTML file for the structure
    ├── styles.css         # CSS file for styling the gallery and player
    ├── script.js          # JavaScript file to handle player functionality

Open the project:

Open the index.html file in your browser to see the music player in action.
Add Your Own Songs:

Place your .mp3.
Update the songs array in the script.js file with your song's details (title, artist, and file path).
Place corresponding cover images in the images folder.

Technologies Used:
HTML5: For structuring the webpage.
CSS3: For styling the gallery and player.
JavaScript: For handling player controls and interaction.

Update the songs array in script.js with the new song details:
javascript
{
    title: 'New Song Title',
    artist: 'New Artist Name',
    file: 'songs/new-song.mp3',
    cover: 'images/new-cover.jpg'
}
Styling: Customize the look and feel of the player by editing the styles.css file.
