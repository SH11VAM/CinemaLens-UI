import React from "react";

function DetailsSection({ movie }) {
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

export default DetailsSection;
