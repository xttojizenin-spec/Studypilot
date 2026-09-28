-- StudyPilot Database Schema
-- Compatible with Cloudflare D1 and SQLite (node:sqlite)

-- 1. Downloads tracking table
CREATE TABLE IF NOT EXISTS downloads (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  apk_version TEXT NOT NULL,
  country_code TEXT,
  source TEXT NOT NULL,
  user_agent_hash TEXT,
  ip_hash TEXT
);
CREATE INDEX IF NOT EXISTS idx_downloads_created_at ON downloads(created_at);
CREATE INDEX IF NOT EXISTS idx_downloads_ip_hash ON downloads(ip_hash, created_at);

-- 2. Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  country_code TEXT,
  rating INTEGER CHECK (rating IS NULL OR (rating >= 1 AND rating <= 5)),
  comment TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status, created_at DESC);

-- 3. Suggestions table
CREATE TABLE IF NOT EXISTS suggestions (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  country_code TEXT,
  category TEXT NOT NULL CHECK (category IN ('add', 'modify', 'remove')),
  suggestion TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'reviewing', 'planned', 'in_development', 'completed', 'declined')),
  votes INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_suggestions_status ON suggestions(status, created_at DESC);

-- 4. Suggestion votes tracking table (Prevents repeated unlimited voting)
CREATE TABLE IF NOT EXISTS suggestion_votes (
  id TEXT PRIMARY KEY,
  suggestion_id TEXT NOT NULL,
  voter_hash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  UNIQUE(suggestion_id, voter_hash),
  FOREIGN KEY (suggestion_id) REFERENCES suggestions(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_suggestion_votes_lookup ON suggestion_votes(suggestion_id, voter_hash);
