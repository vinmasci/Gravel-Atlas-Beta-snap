# Gravel Atlas Directory Structure

## Root Files
- `.eslintrc.js` - ESLint configuration for TypeScript/React
- `.gitignore` - Git ignore patterns
- `components.json` - Shadcn UI components configuration
- `middleware.ts` - Next.js auth and API route middleware
- `next.config.js` - Next.js configuration (API routes, environment)
- `package.json` - Project dependencies and scripts
- `postcss.config.mjs` - PostCSS config for Tailwind
- `tailwind.config.ts` - Tailwind CSS theme and plugins
- `tsconfig.json` - TypeScript compiler configuration
- `vercel.json` - Vercel deployment settings

## /app
Next.js 13+ app directory structure

### /app/api
- `/get-elevation/route.ts` - Fetches elevation data for trail segments
- `/photos/route.ts` - Handles photo listing and retrieval
- `/photos/upload/route.ts` - Handles photo upload processing
- `/segments/route.ts` - CRUD operations for trail segments
- `/segments/[id]/route.ts` - Individual segment operations
- `/segments/[id]/comments/route.ts` - Segment comments handling
- `/segments/[id]/stats/route.ts` - Segment statistics calculations
- `/segments/[id]/vote/route.ts` - Segment rating/voting system
- `/segments/save/route.ts` - Saves new trail segments
- `/test-db/route.ts` - Database connection testing
- `/user/[id]/route.ts` - User profile operations
- `/user/update/route.ts` - User profile updates
- `/user/upload-image/route.ts` - User avatar upload

### /app/constants
- `map-styles.ts` - Mapbox and custom map style definitions

### /app/contexts
- `draw-mode-context.tsx` - State management for trail drawing mode
- `map-context.tsx` - Global map state and controls

### /app/hooks
- `use-draw-mode.ts` - Trail segment drawing functionality
- `use-force-reset.ts` - Component reset utilities
- `use-toast.ts` - Toast notification system

### /app/models
- `DrawnSegment.ts` - Trail segment data structure

### /app/types
- `map.ts` - TypeScript types for map features
- `photos.ts` - Photo-related type definitions
- `auth/index.ts` - Authentication type definitions

## /components

### Core Components
- `map-view.tsx` - Main map display component
- `nav-sidebar.tsx` - Navigation sidebar
- `navbar.tsx` - Top navigation bar
- `photo-upload-dialog.tsx` - Photo upload interface
- `ProfileSheet.tsx` - User profile slide-out
- `theme-provider.tsx` - Theme context provider

### /components/auth
- `auth-status.tsx` - Authentication state display

### /components/map
- `photo-marker.tsx` - Photo location markers on map

### /components/panels
- `draw-segment-panel.tsx` - Trail drawing controls
- `layer-control.tsx` - Map layer visibility toggles
- `layers-panel.tsx` - Layer management panel
- `photos-layer.tsx` - Photo layer controls
- `search-panel.tsx` - Location search interface
- `upload-photo.tsx` - Photo upload panel
- `user-panel.tsx` - User settings panel

### /components/photos
- `photo-viewer.tsx` - Photo display component

### /components/segments
- `floating-elevation-profile.tsx` - Elevation graph overlay
- `segment-dialog.tsx` - Segment details popup
- `segment-sheet.tsx` - Detailed segment information

### /components/ui
Shadcn UI components:
- Basic UI elements (button, input, card)
- Dialog components
- Navigation elements
- Form controls
- Toast notifications

## /lib
Core functionality:

### Map Layers
- `bike-infrastructure-layer.ts` - Bike paths/lanes display
- `gravel-roads-layer.ts` - Gravel road rendering
- `paved-roads-layer.ts` - Paved road rendering
- `private-roads-layer.ts` - Private road display
- `segment-layer.ts` - User-created trail segments
- `unknown-surface-layer.ts` - Unknown road surfaces
- `water-points-layer.ts` - Water source locations

### Utilities
- `auth-sync.ts` - Auth0 synchronization
- `db.ts` - Database operations wrapper
- `map-draw.ts` - Map drawing utilities
- `mapillary.ts` - Mapillary API integration
- `mongodb.ts` - MongoDB connection/queries
- `utils.ts` - Shared utility functions

## /pages
Legacy Next.js pages:
- `/api/auth/[...auth0].ts` - Auth0 authentication

## /public
Static assets:
- SVG icons (file.svg, globe.svg, etc.)
- Custom icons for features

## /scripts
Maintenance scripts:
- `migrate-segments.js` - Database migration tool
- `stitch-segments.js` - Segment connection utility
