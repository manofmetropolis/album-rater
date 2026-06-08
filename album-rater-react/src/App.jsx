import { useState, useEffect } from "react";
import "./App.css";

import AlbumCard from "./AlbumCard";
import AlbumForm from "./AlbumForm";

function App() {
  const [albums, setAlbums] = useState(() => {
    const saved = localStorage.getItem("albums");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("albums", JSON.stringify(albums));
  }, [albums]);

  function addAlbum(newAlbum) {
    setAlbums([...albums, newAlbum]);
  }

  function deleteAlbum(id) {
    const updatedAlbums = albums.filter((album) => album.id !== id);
    setAlbums(updatedAlbums);
    console.log("Deleting:", id);
  }


  return (
    <div>
      <h1>Album Rater</h1>

      <AlbumForm onAdd={addAlbum} />

      <div className="grid">
        {albums.map((album) => (
          <AlbumCard
            key={album.id}
            album={album}
            onDelete={deleteAlbum}
          />
        ))}
      </div>
    </div>
  );
}

export default App;