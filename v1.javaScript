const covers = [
  "portada1.jpg",
  "portada2.jpg",
  "portada3.jpg",
  // Añade aquí las rutas de tus 15 portadas
];

let currentCover = 0;
const coverElement = document.getElementById("cover");

document.getElementById("next").addEventListener("click", () => {
  currentCover = (currentCover + 1) % covers.length;
  coverElement.src = covers[currentCover];
});

document.getElementById("prev").addEventListener("click", () => {
  currentCover = (currentCover - 1 + covers.length) % covers.length;
  coverElement.src = covers[currentCover];
});
