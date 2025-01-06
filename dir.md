├── README.md
├── .eslintrc.js
├── .gitignore
├── app
│   ├── admin
│   │   └── page.tsx
│   ├── api
│   │   ├── get-elevation
│   │   │   └── route.ts
│   │   ├── photos
│   │   │   ├── route.ts
│   │   │   └── upload
│   │   │       └── route.ts
│   │   ├── segments
│   │   │   ├── [id]
│   │   │   │   ├── comments
│   │   │   │   │   └── route.ts
│   │   │   │   ├── stats
│   │   │   │   │   └── route.ts
│   │   │   │   ├── vote
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   ├── save
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── test-db
│   │   │   └── route.ts
│   │   └── user
│   │       ├── [id]
│   │       │   └── route.ts
│   │       ├── update
│   │       │   └── route.ts
│   │       └── upload-image
│   │           └── route.ts
│   ├── constants
│   │   └── map-styles.ts
│   ├── contexts
│   │   ├── draw-mode-context.tsx
│   │   └── map-context.tsx
│   ├── favicon.ico
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── globals.css
│   ├── hooks
│   │   ├── use-draw-mode.ts
│   │   ├── use-force-reset.ts
│   │   └── use-toast.ts
│   ├── layout.tsx
│   ├── models
│   │   └── DrawnSegment.ts
│   ├── page.tsx
│   └── types
│       ├── auth
│       │   └── index.ts
│       ├── map.ts
│       └── photos.ts
├── components
│   ├── ProfileSheet.tsx
│   ├── auth
│   │   └── auth-status.tsx
│   ├── map
│   │   └── photo-marker.tsx
│   ├── map-view.tsx
│   ├── nav-sidebar.tsx
│   ├── navbar.tsx
│   ├── panels
│   │   ├── draw-segment-panel.tsx
│   │   ├── layer-control.tsx
│   │   ├── layers-panel.tsx
│   │   ├── photos-layer.tsx
│   │   ├── search-panel.tsx
│   │   ├── upload-photo.tsx
│   │   └── user-panel.tsx
│   ├── photo-upload-dialog.tsx
│   ├── photos
│   │   └── photo-viewer.tsx
│   ├── segments
│   │   ├── floating-elevation-profile.tsx
│   │   ├── segment-dialog.tsx
│   │   └── segment-sheet.tsx
│   ├── theme-provider.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── custom-alert.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── icons.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── navigation-menu.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── sheet.tsx
│       ├── switch.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── components.json
├── lib
│   ├── auth-sync.ts
│   ├── bike-infrastructure-layer.ts
│   ├── db.ts
│   ├── gravel-roads-layer.ts
│   ├── map-draw.ts
│   ├── mapillary.ts
│   ├── mongodb.ts
│   ├── paved-roads-layer.ts
│   ├── photo-layer.ts
│   ├── private-roads-layer.ts
│   ├── segment-layer.ts
│   ├── unknown-surface-layer.ts
│   ├── utils.ts
│   └── water-points-layer.ts
├── middleware.ts
├── next.config.js
├── package-lock.json
├── package.json
├── pages
│   └── api
│       └── auth
│           └── [...auth0].ts
├── postcss.config.mjs
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── icons
│   │   ├── circle-camera-duotone-solid.png
│   │   └── glass-water-droplet-duotone-thin.png
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── scripts
│   ├── migrate-segments.js
│   └── stitch-segments.js
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
