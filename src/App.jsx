import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <>
      <MyNavbar />
      <div className="container-fluid px-4 mt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <h2 className="mb-0">TV Shows</h2>

            <div className="dropdown ms-4">
              <button
                type="button"
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ backgroundColor: "#221f1f", borderColor: "white" }}
              >
                Genres
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Comedy
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drama
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Thriller
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <i className="bi bi-grid icons"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>

        {/* 3 GALLERIE prese da OMDb */}
        <MovieGallery title="Trending Now" query="Harry Potter" />
        <MovieGallery title="Watch it Again" query="Star Wars" />
        <MovieGallery title="New Releases" query="Lord of the Rings" />
      </div>

      <MyFooter />
    </>
  );
}

export default App;
