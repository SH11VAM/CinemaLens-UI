import React from "react";

export function RatingsSection({ ratings }: { ratings: any[] }) {
  return (
    <div className="section">
      <div className="section-title">Critic Ratings</div>
      <div className="ratings-list">
        {ratings.map((r: any) => (
          <div key={r.Source} className="rating-source">
            <span className="rating-source-name">
              {r.Source.replace("Internet Movie Database", "IMDb")
                .replace("Rotten Tomatoes", "Rotten T.")
                .replace("Metacritic", "Metacritic")}
            </span>
            <span className="rating-source-val">{r.Value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DetailsSection({ movie }: { movie: any }) {
  const fields = [
    ["Country",    movie.country],
    ["Language",   movie.language],
    ["Box Office", movie.boxOffice],
    ["Production", movie.production],
    ["Released",   movie.released],
    ["Awards",     movie.awards],
  ].filter(([, v]) => v);

  if (fields.length === 0) return null;

  return (
    <div className="section">
      <div className="section-title">Film Details</div>
      <div className="info-grid">
        {fields.map(([key, val]) => (
          <div key={key} className="info-item">
            <span className="info-key">{key}</span>
            <span className="info-val">{val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
