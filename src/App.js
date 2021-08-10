import "./App.css";
import ImageCard from "./components/ImageCard";
import SearchBar from "./components/SearchBar";
import { useEffect, useState, useContext } from "react";
import { queryContext } from "./context/queryContext";

function App() {
  const { query } = useContext(queryContext);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);

    fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=20&page=1`,
      {
        method: "get",
        headers: new Headers({
          Authorization: process.env.REACT_APP_API_KEY,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch(() => {
        setError(true);
      });
  }, [query]);

  return (
    <div className="App">
      <header className="d-flex justify-content-between align-items-center">
        <a href="/" className="logo">
          Imageblocks
        </a>
        <div>
          <a href="#login">Login</a>
          <a href="#join">Join</a>
        </div>
      </header>
      <div className="hero d-flex flex-column justify-content-center align-items-center">
        <div className="hero-text mb-5 text-center">
          <h2 className="text-light mb-3">
            Stunning free images & royalty free stock
          </h2>
          <p className="text-light m-0">
            Over 2.3 million+ high quality stock images shared by our talented
            community.
          </p>
        </div>
        <SearchBar />
      </div>

      <section className="container mt-5">
        <h2>Explore</h2>

        {!loading && data.photos ? (
          data.photos.length ? (
            <div className="d-flex flex-wrap gap-3 mt-5">
              {data.photos &&
                data.photos.map((item) => (
                  <ImageCard url={item.src.portrait} key={item.id} />
                ))}
            </div>
          ) : (
            <h5 className="mt-5">
              <img src="/ghost.gif" width="100" alt="" />
              Not Found
            </h5>
          )
        ) : error ? (
          <h5 className="mt-5">Server Error 😢😢</h5>
        ) : (
          <h5 className="mt-5">
            loading...
            <img src="/loading.gif" width="30" alt="" />
          </h5>
        )}
      </section>
    </div>
  );
}

export default App;
