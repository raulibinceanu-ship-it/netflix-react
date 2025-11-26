import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

import TVShows from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNavbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MovieGallery title="Harry Potter" query="harry potter" />
              <MovieGallery title="Star Wars" query="star wars" />
              <MovieGallery title="Spider Man" query="spider man" />
            </>
          }
        />

        {/* ROTTA TV SHOWS */}
        <Route path="/tv-shows" element={<TVShows />} />

        {/* ROTTA PARAMETRI */}
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>

      <MyFooter />
    </>
  );
}

export default App;
