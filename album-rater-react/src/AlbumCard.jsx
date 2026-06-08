export default function AlbumCard({ album, onDelete }) {
    return (
        <div className="card" key={album.id}>
            <div>{album.artist}</div>
            <div>{album.name}</div>
            <div>{album.year}</div>
            <div>{album.rating} / 10</div>

            <button onClick={() => onDelete(album.id)}>
                Delete
            </button>
        </div>
    )
}