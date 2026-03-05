import React, { useState, useEffect } from "react";

function SentimentBars({ pos, neu, neg }) {
  const [widths, setWidths] = useState({ pos: 0, neu: 0, neg: 0 });

  useEffect(() => {
    const t = setTimeout(() => setWidths({ pos, neu, neg }), 150);
    return () => clearTimeout(t);
  }, [pos, neu, neg]);

  const bars = [
    { label: "Positive", cls: "pos", width: widths.pos },
    { label: "Neutral",  cls: "neu", width: widths.neu },
    { label: "Negative", cls: "neg", width: widths.neg },
  ];

  return (
    <div className="sentiment-bars">
      {bars.map(({ label, cls, width }) => (
        <div key={cls} className="bar-row">
          <span className="bar-label">{label}</span>
          <div className="bar-track">
            <div className={`bar-fill ${cls}`} style={{ width: `${width}%` }} />
          </div>
          <span className="bar-pct">{width}%</span>
        </div>
      ))}
    </div>
  );
}

function SentimentSection({ sentiment }) {
  if (!sentiment) {
    return (
      <div className="section">
        <div className="section-title">AI Audience Sentiment</div>
        <div className="ai-summary-loading">
          <div className="ai-dot" />
          <div className="ai-dot" />
          <div className="ai-dot" />
          <span>Generating AI sentiment analysis...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="section-title">AI Audience Sentiment</div>
      <div className="sentiment-header">
        <div />
        <div className={`sentiment-badge sentiment-${sentiment.sentiment}`}>
          {sentiment.sentiment.toUpperCase()}
        </div>
      </div>

      <SentimentBars
        pos={sentiment.positive_pct}
        neu={sentiment.neutral_pct}
        neg={sentiment.negative_pct}
      />

      <p className="ai-summary">{sentiment.summary}</p>

      {sentiment.highlights?.length > 0 && (
        <div className="highlights">
          {sentiment.highlights.map((h, i) => (
            <div key={i} className="highlight-item">
              <span className="highlight-dot">◆</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SentimentSection;
