const customGenerateMemeBtn = document.querySelector(
  ".custom-meme-generator .custom-generate-btn"
);
const customMemeImage = document.querySelector("#custom-meme-image");
const customMemeTitle = document.querySelector(".custom-meme-title");
const customMemeAuthor = document.querySelector(".custom-meme-author");

const customUpdateDetails = (url, title, author) => {
  customMemeImage.setAttribute("src", url);
  customMemeTitle.innerHTML = title;
  customMemeAuthor.innerHTML = `Meme by: ${author}`;
};

const customGenerateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      customUpdateDetails(data.url, data.title, data.author);
    });
};

customGenerateMemeBtn.addEventListener("click", customGenerateMeme);

customGenerateMeme();
