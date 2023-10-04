// вне ноды require работать не будет, поэтому используем импорты
import { searchArt } from "./art_helper.js";

window.onload = (ev) => {
  init();
};

const init = () => {
  console.log("hello I am a sample index.js vn");
  document
    .getElementById("title-search-button")
    .addEventListener("click", handleSearchClick);
};

const handleSearchClick = (ev) => {
  const title = document.getElementById("title-search-input").value;
  searchArt({ title }).then(renderResults);
};

const renderResults = ({ artPieces }) => {
  console.log(artPieces);
  document.getElementById("search-results").innerHTML = artPieces.join("");
};
