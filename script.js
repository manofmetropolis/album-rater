let albums = JSON.parse(localStorage.getItem("albums")) || [];

// DOM elements
const coverInput = document.getElementById("coverInput");
const artistInput = document.getElementById("artistInput");
const albumInput = document.getElementById("albumInput");
const releaseYearInput = document.getElementById("releaseYearInput");
const ratingInput = document.getElementById("ratingInput");

const addButton = document.getElementById("addButton");
const albumList = document.getElementById("albumList");

// Save to localStorage
function saveAlbums() {
  localStorage.setItem("albums", JSON.stringify(albums));
}

// Render UI from state
function renderAlbums() {
  albumList.innerHTML = "";

  const sortedAlbums = [...albums].sort((a, b) => b.rating - a.rating);

  sortedAlbums.forEach((album) => {
    const li = document.createElement("li");
    li.classList.add("album-card");

    // COVER (optional)
    if (album.cover) {
      const img = document.createElement("img");
      img.src = album.cover;
      img.alt = album.name;
      img.classList.add("album-cover");
      li.appendChild(img);
    }

    // TEXT FIELDS
    const artist = document.createElement("div");
    artist.classList.add('card-artist');
    artist.textContent = album.artist;

    const name = document.createElement("div");
    name.textContent = album.name;

    const year = document.createElement("div");
    year.textContent = album.year;

    const rating = document.createElement("div");
    rating.textContent = `${album.rating}/10`;

    li.appendChild(artist);
    li.appendChild(name);
    li.appendChild(year);
    li.appendChild(rating);

    // BUTTONS
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    const coverBtn = document.createElement("button");
    coverBtn.textContent = "Add Cover Image";

    li.appendChild(coverBtn);
    li.appendChild(deleteBtn);

    // EVENTS
    deleteBtn.addEventListener("click", () => {
      albums = albums.filter((a) => a.id !== album.id);
      saveAlbums();
      renderAlbums();
    });

    coverBtn.addEventListener("click", () => {
      const url = prompt("Enter image URL:");
      if (!url) return;

      album.cover = url;
      saveAlbums();
      renderAlbums();
    });

    albumList.appendChild(li);
  });
}

// Add album
addButton.addEventListener("click", () => {
  const album = {
    id: Date.now(),
    artist: artistInput.value,
    name: albumInput.value,
    year: releaseYearInput.value,
    rating: Number(ratingInput.value),
    cover: null,
  };

  albums.push(album);
  saveAlbums();
  renderAlbums();

  artistInput.value = "";
  albumInput.value = "";
  releaseYearInput.value = "";
  ratingInput.value = "";
});

// initial render
renderAlbums();