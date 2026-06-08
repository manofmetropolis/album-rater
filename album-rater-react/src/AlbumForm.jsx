import { useState } from "react";

export default function AlbumForm({ onAdd }) {
    const [artist, setArtist] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit() {
        const newAlbum = {
            id: crypto.randomUUID(),
            artist,
            name,
            year: Number(year),
            rating: Number(rating),
        };

        onAdd(newAlbum);

        setArtist("");
        setName("");
        setYear("");
        setRating("");
    }

    return (
        <div>
            <input
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist"
            />

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Album Name"
            />

            <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Release Year"
                type="number"
            />

            <input
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
                type="number"
            />

            <button onClick={handleSubmit}>Add Album</button>
        </div>
    );
}