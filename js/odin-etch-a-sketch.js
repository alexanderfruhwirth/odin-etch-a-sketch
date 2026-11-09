function randomiseColourChannelValue() {
  return Math.floor(Math.random() * 256);
}

function randomiseColour() {
  return `rgb(${randomiseColourChannelValue()} ${randomiseColourChannelValue()} ${randomiseColourChannelValue()})`;
}

const gridContainer = document.querySelector("#grid-container");
const gridSideLength = 100;
let tilesPerSide = 16;
let tileSideLength = `${gridSideLength / tilesPerSide}vmin`;
for (let i = 1; i <= tilesPerSide; i++) {
  for (let j = 1; j <= tilesPerSide; j++) {
    const tile = document.createElement("div");
    tile.style.setProperty("--tile-side-length", tileSideLength);
    tile.classList.add("tile");
    gridContainer.appendChild(tile);
    tile.addEventListener("mouseenter", (e) => {
      e.currentTarget.style.setProperty("background-color", randomiseColour());
    });
  }
}

const setTilesPerSideBtn = document.querySelector("#set-tiles-per-side-btn");
setTilesPerSideBtn.addEventListener("click", () => {
  userInput = prompt(
    "Set the number of tiles per side of the grid (max 100!): ",
    16,
  );
  if (userInput > 100) {
    alert("The maximum number of tiles per side of the grid is 100!");
  } else if (userInput < 1) {
    alert("Don't you want at least 1 tile?");
  } else {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }
    tilesPerSide = userInput;
    tileSideLength = `${gridSideLength / tilesPerSide}vmin`;
    for (let i = 1; i <= tilesPerSide; i++) {
      for (let j = 1; j <= tilesPerSide; j++) {
        const tile = document.createElement("div");
        tile.style.setProperty("--tile-side-length", tileSideLength);
        tile.classList.add("tile");
        gridContainer.appendChild(tile);
        tile.addEventListener("mouseenter", (e) => {
          e.currentTarget.style.setProperty(
            "background-color",
            randomiseColour(),
          );
        });
      }
    }
  }
});
