# SiteWeave Web App

Standalone web application for SiteWeave project management platform.

This is the standalone version of the web app, optimized for Netlify deployment. For the full monorepo (including desktop and mobile apps), see the [SiteWeave monorepo](https://github.com/21chrisab/SiteWeave).

## Repository Structure

```
SiteWeaveWeb/
â”œâ”€â”€ src/                    # Web app source code
â”œâ”€â”€ public/                 # Static assets
â”œâ”€â”€ packages/
â”‚   â””â”€â”€ core-logic/        # Embedded shared business logic
â”œâ”€â”€ package.json           # Web-only dependencies
â”œâ”€â”€ netlify.toml          # Netlify deployment configuration
â””â”€â”€ vite.config.ts        # Vite build configuration
```

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Client-side routing
- **Supabase** - Backend (database, auth, storage)
- **FullCalendar** - Calendar component

## Setup

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with your Supabase credentials:
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Run the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Deployment

This app is configured for automatic deployment to Netlify.

### Netlify Configuration

The `netlify.toml` file contains:
- Build command: `npm install && npm run build`
- Publish directory: `dist`
- SPA routing redirects
- Asset caching headers

### Manual Deployment

1. Build the app:
```bash
npm run build
```

2. Deploy the `dist/` directory to Netlify (via CLI, drag-and-drop, or Git integration)

### Environment Variables

Set these in your Netlify dashboard under Site Settings > Environment Variables:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## Features

- Project management and viewing
- Task tracking
- Real-time messaging
- File and photo management
- Calendar integration
- OAuth authentication (Google, Microsoft)
- Multi-tenant B2B support
- Invitation acceptance flow

## Shared Package

The `packages/core-logic/` directory contains shared business logic:
- Supabase client configuration
- Service layer (projects, tasks, messages, contacts, etc.)
- Common utilities

**Note:** This is an embedded copy. For updates, sync from the main monorepo's `packages/core-logic/`.

## Development

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building

```bash
npm run build
```

Output will be in the `dist/` directory.

## GitHub Workflow

See the main monorepo's [GITHUB_WORKFLOW_GUIDE.md](https://github.com/21chrisab/SiteWeave/blob/main/GITHUB_WORKFLOW_GUIDE.md) for instructions on committing and pushing changes.

**Quick reference:**
- Web app changes â†’ Push to this repository (SiteWeaveWeb)
- Core logic changes â†’ Sync to both repositories

## License

See LICENSE file for details.
