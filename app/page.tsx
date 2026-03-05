'use client';

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieHero from "./components/MovieHero";
import CastSection from "./components/CastSection";
import SentimentSection from "./components/SentimentSection";
import { RatingsSection } from "./components/RatingsSection";
import DetailsSection from "./components/DetailsSection";
import { Loader } from "./components/Loader";
import ErrorCard from "./components/ErrorCard";
import { fetchMovie, fetchSentiment } from "./api/api";
import "./globals.css";

const EXAMPLES = [
  { id: "tt0133093", label: "The Matrix" },
  { id: "tt0068646", label: "The Godfather" },
  { id: "tt0111161", label: "Shawshank" },
  { id: "tt1375666", label: "Inception" },
  { id: "tt0120737", label: "Fellowship" },
];

export default function page() {
  const [inputId, setInputId] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState("");
  const [movie, setMovie] = useState<any | null>(null);
  const [sentiment, setSentiment] = useState(null);
  const [error, setError] = useState(null);     

  const validate = (val:any) => {
    if (!val.trim()) return "Please enter an IMDb ID (e.g. tt0133093)";
    if (!/^tt\d{7,8}$/i.test(val.trim()))
      return "Invalid format — use tt followed by 7–8 digits";
    return "";
  };

  const handleSearch = async (overrideId:any) => {
    const target = (overrideId || inputId).trim();
    const err = validate(target);
    if (err) { setInputError(err); return; }

    setInputError("");
    setLoading(true);
    setMovie(null);
    setSentiment(null);
    setError(null);

    try {
      setLoadingPhase("Fetching movie data...");
      const movieData = await fetchMovie(target.toLowerCase());
      setMovie(movieData);
      console.log(`Movie data fetched:`, movieData);

      setLoadingPhase("Analyzing audience sentiment with AI...");
      const sentimentData = await fetchSentiment(movieData);
      setSentiment(sentimentData);
    } catch (e: any) {
      const msg =
        e.response?.data?.error || e.message || "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
      setLoadingPhase("");
    }
  };

  return (
    <div className="app-wrapper">
      <div className="grain-overlay" />

      <header className="header">
        <div className="header-label">AI-Powered Film Intelligence</div>
        <h1 className="header-title">
          CINEMA<span>LENS</span>
        </h1>
        <p className="header-sub">
          Enter an IMDb ID to unlock deep movie insights & audience sentiment
        </p>
      </header>

      <SearchBar
        value={inputId}
        onChange={(v:any) => { setInputId(v); setInputError(""); }}
        onSearch={() => handleSearch(undefined)}
        error={inputError}
        loading={loading}
      />

      <div className="examples">
        <div className="examples-label">TRY AN EXAMPLE</div>
        <div className="examples-chips">
          {EXAMPLES.map((ex) => (
            <button
              key={ex.id}
              className="chip"
              onClick={() => { setInputId(ex.id); handleSearch(ex.id); }}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {loading && <Loader phase={loadingPhase} />}
      {error && <ErrorCard message={error} />}

      {movie && !loading && (
        <div className="movie-card">
          <MovieHero movie={movie} />
          <CastSection movie={movie} />
          <SentimentSection sentiment={sentiment} />
          {movie.ratings?.length > 0 && <RatingsSection ratings={movie.ratings} />}
          <DetailsSection movie={movie} />
        </div>
      )}
    </div>
  );
}


