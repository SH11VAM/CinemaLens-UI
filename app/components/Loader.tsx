import React from "react";

export function Loader({ phase }: { phase: string }) {
  return (
    <div className="loader">
      <div className="loader-ring" />
      <div className="loader-text">{phase}</div>
    </div>
  );
}

export function ErrorCard({ message }: { message: string }) {
  return (
    <div className="error-card">
      <div className="error-icon">🎬</div>
      <div className="error-title">Movie Not Found</div>
      <div className="error-detail">{message}</div>
    </div>
  );
}
