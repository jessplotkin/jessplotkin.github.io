document.getElementById('randomButton').addEventListener('click', getRandomComic);

function getRandomComic() {
  const randomComicNumber = Math.floor(Math.random() * 3000) + 1;
  const comicURL = `https://corsproxy.io/?https://xkcd.com/${randomComicNumber}/info.0.json`;

  fetch(comicURL)
    .then(response => response.json())
    .then(data => {
      document.getElementById('title').innerText = data.title;
      document.getElementById('comicImage').src = data.img;
      document.getElementById('comicImage').alt = data.alt;
      document.getElementById('date').innerText = `Published on: ${data.year}-${data.month}-${data.day}`;
    })
    .catch(error => {
      console.error('Error fetching comic:', error);
    });
}
