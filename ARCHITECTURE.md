# StudyPilot Architecture & Production Roadmap

## Overview
StudyPilot is an Android study companion. This landing website provides product introduction, feature education, community review & suggestion workflows, honest metrics, and eventual APK distribution.

## Current Preview Environment (Google AI Studio)
In Google AI Studio preview, the application runs with **ZERO REQUIRED ENVIRONMENT VARIABLES**.
- **Frontend**: React 19 SPA powered by Vite & Tailwind CSS.
- **Service Layer**: Decoupled service adapters (`statsService`, `downloadService`, `reviewsService`, `suggestionsService`, `configService`).
- **Adapter Mode**: Defaults automatically to `development_adapter`.
  - Zero database credentials or paths required.
  - Returns honest zero-metric baselines (0 downloads, 0 monthly downloads, "—" countries).
  - Validates and handles review & suggestion submissions with clear development-mode notifications.
  - Zero fake data, zero synthetic ratings, zero phantom downloads.
- **APK Configuration**: Centralized in `src/config/appConfig.ts`. Displays *"Coming Soon"* until the final APK release URL is provided.

## Future Production Backend Architecture
When ready for public deployment, the architecture transitions to a 100% free serverless stack:

```
                                           Visitors & Android Users
                                                      │
                                                      ▼
                                              Cloudflare Pages
                                           (Fast Global Edge CDN)
                                            React Single-Page App
                                                      │
                                                      ▼
                                              Cloudflare Workers
                                            (/api/* Microservices)
                                            ┌─────────┴─────────┐
                                            ▼                   ▼
                                     Cloudflare D1         APK Distribution Host
                                 (Edge SQLite Database)   (GitHub Releases / Cloud)
                                 migrations/0001_*.sql
```

### Database Tables (Pre-migrated in `migrations/0001_initial_schema.sql`):
1. **`downloads`**: Tracks verified download requests, timestamp, APK version, source, and privacy-salted hash (no raw IP storage).
2. **`reviews`**: Stores student feedback with moderation status (`pending`, `approved`, `rejected`).
3. **`suggestions`**: Stores feature ideas across categories (`add`, `modify`, `remove`) and statuses (`new`, `reviewing`, `planned`, `in_development`, `completed`, `declined`).
4. **`suggestion_votes`**: Records deduplicated votes per client token.

## Configuration Location
To update APK release details when ready, edit **`src/config/appConfig.ts`**:
```typescript
apk: {
  available: true,
  version: "1.0.0",
  downloadUrl: "https://your-domain.com/downloads/studypilot-release.apk",
  size: "24.8 MB",
  releaseDate: "2026-10-01",
  comingSoonLabel: "StudyPilot is coming soon",
  readyLabel: "Download StudyPilot",
}
```

To enable the production backend adapter once Cloudflare Workers and D1 are deployed:
```typescript
environment: {
  isProductionBackendConfigured: true,
  backendProvider: "cloudflare_workers_d1"
}
```
