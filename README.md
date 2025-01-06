# Gravel Atlas

A web application for mapping and exploring gravel roads across Australia, built with Next.js, Mapbox, and modern web technologies.

## 🎯 Project Overview

Gravel Atlas is designed to help cyclists and adventurers discover and share gravel roads and trails across Australia. The application combines modern mapping technology with social features to create a comprehensive resource for the gravel cycling community.

## 🔑 Core Features

### Map System
- Multiple map providers (Mapbox, OSM Cycle, Google Maps)
- Comprehensive layer system:
  - Gravel/unpaved roads
  - Cycling infrastructure
  - User-drawn segments
  - Photo markers
  - Water points
- Mapillary integration (except Google Maps)

### Segment Management
- Interactive route drawing with point-to-point capability
- Snap-to-road functionality
- Surface condition voting system
- Elevation profile visualization
- Comments system with user interaction

### Photo System
- GPS metadata extraction from uploads
- Map markers with clustering
- Photo preview and details
- AWS S3 storage integration

### User Features
- Auth0 authentication
- User profiles with MongoDB
- Dark/Light mode persistence
- Profile picture management via AWS S3

## 🛠 Technical Stack

- Next.js 14 (App Router)
- TypeScript
- Mapbox GL JS
- MongoDB/Mongoose
- AWS S3
- Auth0
- Tailwind CSS/shadcn/ui

## 📁 Project Structure

### `/app`
- `/admin` - Administration dashboard
- `/api` - API endpoints
- `/constants` - Application constants
- `/contexts` - React contexts
- `/hooks` - Custom React hooks
- `/models` - MongoDB schemas
- `/types` - TypeScript type definitions

### `/components`
- `/auth` - Authentication components
- `/map` - Map-related components
- `/panels` - Control panels and tools
- `/segments` - Segment management
- `/photos` - Photo system components
- `/ui` - Shared UI components

### `/lib`
- Database utilities
- Map layer implementations
- Utility functions
- External integrations

## 🔧 Environment Setup

Required environment variables:
```env
# Map Services
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_THUNDERFOREST_API_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Authentication
AUTH0_SECRET=
AUTH0_BASE_URL=
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=

# AWS Configuration
AWS_REGION=ap-southeast-2
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET=

# Database
MONGODB_URI=
```

## 💡 Technical Notes

### Map Layers
- Gravel roads layer uses vector tiles (zoom levels 8-16)
- Cycling infrastructure extracted from OpenStreetMap
- Water points layer with custom icons
- Photo clustering for performance

### Elevation Profile
- Canvas-based terrain visualization
- 100m interval sampling for performance
- Real-time updates during drawing
- Grade-based coloring system

### Known Limitations
- OSM Cycle Map requires zoom level 6+
- Mapillary integration limited to Mapbox/OSM
- Layer states reset between map style changes

## 🔄 Current Development Status

### Recent Implementations
- Elevation profile visualization with grade-based coloring
- Surface type detection and display
- Multi-segment route handling
- Photo system optimizations

### In Progress
- Surface type consistency between segment line and elevation profile
- Enhanced elevation profile visualization
- Improved descent calculations
- Code structure optimization

### Next Steps
1. Standardize surface type determination
2. Implement grade-based elevation profile coloring
3. Enhance surface type visualization
4. Optimize code structure and data flow

Under "Recent Fixes" section:

Eliminated duplicate elevation points at kilometer intervals
Fixed surface type consistency between segment line and elevation profile
Optimized point sampling for smoother elevation visualization
Improved accuracy of grade calculations
Enhanced elevation profile rendering with proper distance tracking

These changes involved:

Implementing a unique distance tracking system to prevent duplicates
Optimizing the resampling logic for elevation data
Fixing grade calculation duplications
Improving surface type consistency across components