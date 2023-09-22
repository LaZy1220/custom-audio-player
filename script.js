// Получаем элементы DOM
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const audio = document.getElementById("myAudio");

// Обработчики событий для кнопок воспроизведения и паузы
playButton.addEventListener("click", () => {
  audio.play();
});

pauseButton.addEventListener("click", () => {
  audio.pause();
});
