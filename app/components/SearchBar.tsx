import React from "react";

function SearchBar({ value, onChange, onSearch, error, loading } : { value: string, onChange: (v: string) => void, onSearch: () => void, error?: string, loading?: boolean }) {
  return (
    <div className="search-section">
      <div className="search-input-wrap">
        <input
          className={`search-input${error ? " error" : ""}`}
          placeholder="tt0133093"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
          spellCheck={false}
          autoComplete="off"
        />
      </div>
      <button
        className="search-btn"
        onClick={() => onSearch()}
        disabled={loading}
      >
        {loading ? "..." : "ANALYZE"}
      </button>
      {error && <div className="error-msg">⚠ {error}</div>}
    </div>
  );
}

export default SearchBar;
