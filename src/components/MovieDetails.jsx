import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "69b70217";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [movieId]);

  return (
    <div style={{ color: "white", padding: "20px" }}>
      {!movie ? (
        <p>Caricamento...</p>
      ) : (
        <>
          <h2>{movie.Title}</h2>
          <img
            src={movie.Poster}
            alt={movie.Title}
            style={{ width: "200px" }}
          />
          <p>Anno: {movie.Year}</p>
          <p>Trama: {movie.Plot}</p>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
