const player = document.querySelector(".player");
const playBtn = document.querySelector(".play");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const audio = document.querySelector(".audio");
const progressContainer = document.querySelector(".progress_container");
const progress = document.querySelector(".progress");
const author = document.querySelector(".author");
const cover = document.querySelector(".cover");
const coverText = document.querySelector(".cover__text");
const imgSrc = document.querySelector(".img__src");

const songs = ["Turn It Up", "Here We Go Again", "Miss You"];
const authors = [
  "Oliver Tree & Little Big & Tommy Cash",
  "Oliver Tree & David Guetta",
  "Oliver Tree & Robin Schulz",
];
let songIndex = 0;

function loadSong(song, authorText) {
  author.innerHTML = authorText;
  coverText.innerHTML = song;
  audio.src = `audio/${song}.mp3`;
}
loadSong(songs[songIndex], authors[songIndex]);

function playSong() {
  player.classList.add("play");
  cover.classList.add("active");
  imgSrc.src = "./img/pause.png";
  audio.play();
}
function pauseSong() {
  player.classList.remove("play");
  cover.classList.remove("active");
  imgSrc.src = "./img/play.png";
  audio.pause();
}
playBtn.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (!isPlaying) {
    playSong();
  } else {
    pauseSong();
  }
});

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex], authors[songIndex]);
  playSong();
}
nextBtn.addEventListener("click", nextSong);

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex], authors[songIndex]);
  playSong();
}
prevBtn.addEventListener("click", prevSong);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPersent = (currentTime / duration) * 100;
  progress.style.width = `${progressPersent}%`;
}
audio.addEventListener("timeupdate", updateProgress);
