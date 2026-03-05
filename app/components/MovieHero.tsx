import React from "react";

function MovieHero({ movie }: { movie: any }) {
  return (
    <div className="movie-hero">
      <div className="poster-wrap">
        {movie.poster ? (
          <img src={movie.poster} alt={movie.title} className="poster" />
        ) : (
          <div className="poster-placeholder">🎥</div>
        )}
      </div>

      <div className="movie-meta">
        <div className="meta-top">
          {movie.year && <span className="badge badge-year">{movie.year}</span>}
          {movie.rated && <span className="badge badge-rated">{movie.rated}</span>}
          {movie.runtime && <span className="badge badge-genre">{movie.runtime}</span>}
          {movie.genre?.slice(0, 2).map((g: string) => (
            <span key={g} className="badge badge-genre">{g}</span>
          ))}
        </div>

        <h2 className="movie-title">{movie.title}</h2>

        {movie.director && (
          <div className="movie-director">
            Directed by <span>{movie.director}</span>
          </div>
        )}

        <div className="rating-row">
          {movie.imdbRating && (
            <div className="imdb-rating">
              <span className="star-icon">★</span>
              <span className="rating-val">{movie.imdbRating}</span>
              <span className="rating-max">/10</span>
            </div>
          )}
          {movie.imdbVotes && (
            <span className="votes-count">{movie.imdbVotes} votes</span>
          )}
          {movie.metascore && (
            <span className="votes-count">Metascore: {movie.metascore}</span>
          )}
        </div>

        {movie.plot && <p className="plot-text">{movie.plot}</p>}
      </div>
    </div>
  );
}

export default MovieHero;
