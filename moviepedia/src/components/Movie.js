function Movie({ title, poster, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={poster} alt="no image" />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
