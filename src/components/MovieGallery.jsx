import { useEffect, useState } from "react";

function MovieGallery({ title, query }) {
  const [movies, setMovies] = useState([]);

  const API_KEY = "69b70217";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      })
      .catch((error) => console.log("Errore nel fetch:", error));
  }, [query]);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white" }}>{title}</h2>

      <div style={{ display: "flex", gap: "10px", overflowX: "scroll" }}>
        {movies.map((m) => (
          <img
            key={m.imdbID}
            src={m.Poster}
            alt={m.Title}
            style={{ width: "150px", borderRadius: "4px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieGallery;
