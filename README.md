This is a simple example of using Meilisearch with Next.js 14 and InstantSearch.js

## Prerequisites

Before you get started, make sure you have the following installed:

- Docker
- Bun

## Getting Started

First, start Meilisearch with Docker:

```bash
docker compose up -d
```

Open [http://localhost:7700](http://localhost:7700) with your browser to view the Meilisearch dashboard. You'll need to enter the master key defined in `docker-compose.yaml`.

Next, go ahead and install the app dependencies:

```bash
bun install
```

Once installed, we can then seed Meilisearch with our sample data:

```bash
bun ./scripts/seed.ts
```

Now, run the Next.js development dev server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser. You should see a listing of movies and be able to search through them!
