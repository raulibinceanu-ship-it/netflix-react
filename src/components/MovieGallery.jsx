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
        } else {
          setMovies([]); // nessun risultato
        }
      })
      .catch((error) => console.log("Errore nel fetch:", error));
  }, [query]);

  return (
    <>
      <h4>{title}</h4>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {movies.map((m) => (
          <div className="col mb-2 text-center px-1" key={m.imdbID}>
            {m.Poster && m.Poster !== "N/A" && (
              <img
                className="img-fluid movie-poster"
                src={m.Poster}
                alt={m.Title}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieGallery;
