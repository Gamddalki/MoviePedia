import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, poster, summary, genres }) {
  return (
    <div className={styles.movie}>
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={poster} alt="no image" className={styles.movie__img} />
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
