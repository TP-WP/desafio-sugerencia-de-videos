import Reproductor from "./reproductor.js";

let musica = new Reproductor(
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "musica"
);
let peliculas = new Reproductor(
  "https://www.youtube.com/embed/5PSNL1qE6VY",
  "peliculas"
);
let series = new Reproductor(
  "https://www.youtube.com/embed/oWqAf4eex14",
  "series"
);

let elementos = document.querySelectorAll(".accordion div.card");

elementos[0].addEventListener("click", function () {
  musica.playMultimedia();
  musica.setInicio("43");
});

elementos[1].addEventListener("click", function () {
  peliculas.playMultimedia();
});

elementos[2].addEventListener("click", function () {
  series.playMultimedia();
  series.setInicio("15");
});
