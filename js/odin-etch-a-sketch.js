const gridContainer = document.querySelector("#grid-container");
let tilesPerSide = 16;
for (let i = 1; i <= tilesPerSide; i++) {
  for (let j = 1; j <= tilesPerSide; j++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    gridContainer.appendChild(tile);
    tile.addEventListener("mouseenter", (e) => {
      e.currentTarget.classList.add("bg-red");
    });
  }
}
