import React from "react";

function CastSection({ movie }) {
  const { actors = [], writers = [], director } = movie;
  const directors = director ? director.split(", ") : [];

  return (
    <div className="section">
      <div className="section-title">Cast &amp; Crew</div>
      <div className="cast-grid">
        {actors.map((actor) => (
          <div key={actor} className="cast-chip">
            {actor}
            <strong>Actor</strong>
          </div>
        ))}
        {writers.slice(0, 2).map((w) => (
          <div key={w} className="cast-chip">
            {w}
            <strong>Writer</strong>
          </div>
        ))}
        {directors.map((d) => (
          <div key={d} className="cast-chip">
            {d}
            <strong>Director</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CastSection;
