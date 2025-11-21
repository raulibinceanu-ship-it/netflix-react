import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import MovieGallery from "./components/MovieGallery";

function App() {
  return (
    <>
      <MyNavbar />
      <h1>HEY! This is Netflix React!</h1>
      <MovieGallery title="Harry Potter" search="Harry Potter" />
      <MovieGallery title="Star Wars" search="Star Wars" />
      <MovieGallery title="Lord of the Rings" search="Lord of the Rings" />
      <MyFooter />
    </>
  );
}

export default App;
