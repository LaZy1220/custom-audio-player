const player = document.querySelector(".player");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const audio = document.querySelector(".audio");
const progressContainer = document.querySelector(".progress_container");
const progress = document.querySelector(".progress");
const title = document.querySelector(".song");
const cover = document.querySelector(".cover__img");
const coverText = document.querySelector(".cover__text");
const imgSrc = document.querySelector(".img__src");

const songs = ["Miss You", "Here We Go Again", "Turn It Up"];
const authors = [
  "Oliver Tree & Robin Schulz",
  "Oliver Tree & David Guetta",
  "Oliver Tree & Little Big & Tommy Cash",
];
const songIndex = 0;

coverText.innerHTML = authors[songIndex];
function loadSong(song) {
  console.log(song);
  title.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
}
loadSong(songs[songIndex]);

function playSong() {
  player.classList.add("play");
  audio.play();
}
function pauseSong() {
  audio.stop();
}
playBtn.addEventListener("click", () => {
  playSong();
});
