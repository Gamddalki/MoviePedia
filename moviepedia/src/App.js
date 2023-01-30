import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>{movies.length} Movies here!</h1>
      {loading ? <strong>Loading...</strong> : null}
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            title={movie.title}
            poster={movie.medium_cover_image}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))}
      </div>
    </div>
  );
}

Movie.PropTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
