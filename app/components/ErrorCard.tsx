import React from "react";

function ErrorCard({ message }) {
  return (
    <div className="error-card">
      <div className="error-icon">🎬</div>
      <div className="error-title">Movie Not Found</div>
      <div className="error-detail">{message}</div>
    </div>
  );
}

export default ErrorCard;
