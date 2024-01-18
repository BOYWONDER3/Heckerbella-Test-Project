import { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Api_Token } from "../helper/dotenv";
export default function FeaturedMovie() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenre] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      fetch(`https://api.themoviedb.org/3/movie/popular?language=en`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${Api_Token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setMovies(data.results));
    };

    const getGenre = async () => {
      fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
        method: "GET",
        headers: {
          authorization: `Bearer ${Api_Token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("log", setGenre(data.genres));
        });
    };

    getGenre();
    getMovies();
  }, []);
  const movieElements = movies.map((list) => {
    return <Card list={list} genre={genres} />;
  });
  return (
    <div className="feature_movie">
      <h2>FeaturedMovie</h2>
      <div className="feature_movie_main">{movieElements}</div>
    </div>
  );
}
