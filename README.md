# 🎬 CinemaLens

**AI-Powered IMDb Movie Analyzer** — Enter any IMDb ID and get movie details, cast, ratings & AI-generated audience sentiment analysis.

Built with **Next.js 14**, **Express.js**, **OpenRouter AI**, and the **OMDb API**.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- An [OMDb API key](https://www.omdbapi.com/apikey.aspx) (free)
- An [OpenRouter API key](https://openrouter.ai/keys) (free tier available)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/cinemalens.git
cd cinemalens
```

### 2. Setup the backend

```bash
cd backend
cp .env.example .env
# Fill in your API keys in .env
npm install
npm run dev        # runs on http://localhost:5000
```

### 3. Setup the frontend

```bash
cd frontend
cp .env.example .env
# .env already points to http://localhost:5000
npm install
npm run dev        # runs on http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

### `backend/.env`

| Variable | Required | Description | Get it from |
|---|---|---|---|
| `PORT` | Optional | Server port (default: 5000) | — |
| `OMDB_API_KEY` | ✅ Yes | OMDb movie database key | [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) |
| `OPENROUTER_API_KEY` | ✅ Yes | AI model gateway key | [openrouter.ai/keys](https://openrouter.ai/keys) |
| `OPENROUTER_MODEL` | Optional | AI model to use | See free models below |
| `FRONTEND_URL` | Optional | CORS allowed origin | Your Vercel URL in prod |

```env
PORT=5000
OMDB_API_KEY=your_omdb_key_here
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxxxxxx
OPENROUTER_MODEL=mistralai/mistral-7b-instruct
FRONTEND_URL=http://localhost:3000
```

### `frontend/.env`

| Variable | Required | Description |
|---|---|---|
| `REACT_APP_API_URL` | ✅ Yes | Backend base URL |

```env
# Development
REACT_APP_API_URL=http://localhost:5000

# Production
REACT_APP_API_URL=https://your-backend.onrender.com
```

### Free AI Models (OpenRouter)

| Model | Cost | Notes |
|---|---|---|
| `mistralai/mistral-7b-instruct` | ✅ Free | Default — works great |
| `google/gemma-3-27b-it:free` | ✅ Free | Better reasoning |
| `meta-llama/llama-3.1-8b-instruct:free` | ✅ Free | Fast responses |
| `anthropic/claude-3-haiku` | 💰 Paid | Best quality |

---

## 📁 Project Structure

```
cinemalens-ui                    # React application
    ├── public/
    │   └── index.html
    ├── app/
    │   ├── page.tsx                  # Root component & state management
    │   ├── api.ts                  # Axios calls to backend
    │   ├── components/
    │   │   ├── SearchBar.jsx        # IMDb ID input + submit
    │   │   ├── MovieHero.jsx        # Poster, title, rating, plot
    │   │   ├── CastSection.jsx      # Actor / writer / director chips
    │   │   ├── SentimentSection.jsx # AI bars, summary, highlights
    │   │   ├── RatingsSection.jsx   # IMDb / RT / Metacritic
    │   │   ├── DetailsSection.jsx   # Country, box office, awards
    │   │   ├── Loader.jsx           # Spinner with phase label
    │   │   └── ErrorCard.jsx        # Graceful error display
    │   └── styles/
    │       └── global.css           # Dark cinematic theme + animations
    ├── .env.example
    └── package.json
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server status + env check |
| `GET` | `/api/movie/:imdbId` | Fetch movie from OMDb |
| `POST` | `/api/movie/sentiment` | AI sentiment analysis |

**Example:**
```bash
curl http://localhost:5000/api/movie/tt0133093
```

```json
{
  "success": true,
  "data": {
    "title": "The Matrix",
    "year": "1999",
    "imdbRating": "8.7",
    "genre": ["Action", "Sci-Fi"],
    "actors": ["Keanu Reeves", "Laurence Fishburne"],
    "poster": "https://...",
    "plot": "..."
  }
}
```

---

## 🌐 Deployment

### Backend → [Render](https://render.com) (free tier)

1. Create a new **Web Service** on Render
2. Connect your GitHub repo, set root to `backend/`
3. Build command: `npm install`
4. Start command: `node server.js`
5. Add all environment variables from `backend/.env`
6. Copy your Render URL for the frontend config

### Frontend → [Vercel](https://vercel.com) (free tier)

1. Import your repo on Vercel
2. Set root directory to `frontend/`
3. Add env variable: `REACT_APP_API_URL` = your Render backend URL
4. Click **Deploy**

---

## ✨ Features

- 🔍 IMDb ID input with format validation (`tt` + 7–8 digits)
- 🎬 Movie poster, title, genres, runtime, full plot
- ⭐ IMDb, Rotten Tomatoes & Metacritic ratings side by side
- 🤖 AI-generated audience sentiment (Positive / Mixed / Negative)
- 📊 Animated sentiment bars with percentage breakdown
- 💡 3 specific AI-generated audience insight highlights
- 🎯 One-click example chips (Matrix, Godfather, Inception...)
- ⚠️ Graceful error handling for invalid IDs and API failures
- 🛡️ Rate limiting (60 req/min per IP)
- 📱 Fully responsive — mobile and desktop
- 🌑 Dark cinematic UI with gold accents

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18, CSS3 |
| Backend | Node.js, Express.js |
| Movie Data | OMDb API |
| AI Sentiment | OpenRouter (Mistral / Llama / Gemma) |
| Deployment | Vercel + Render |

---

## 📄 License

MIT License — feel free to use, modify, and distribute.
