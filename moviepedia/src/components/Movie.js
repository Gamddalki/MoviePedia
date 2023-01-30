import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, title, year, poster, summary, genres }) {
  return (
    <div className={styles.movie}>
      <img src={poster} alt="no image" className={styles.movie__img} />
      <h2 className={styles.movie__title}>
        <Link to={`/movie/${id}`}>{title}</Link>
        <h3 className={styles.movie__year}>({year})</h3>
      </h2>
      <p>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
      <ul className={styles.movie__genres}>
        {genres.map((g) => (
          <li key={g}>#{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
