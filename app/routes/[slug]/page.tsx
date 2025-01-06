'use client'

import { MapContext } from '@/app/contexts/map-context'
import { DrawModeProvider } from '@/app/contexts/draw-mode-context'
import React, { useState, useCallback, useEffect } from 'react'
import MapView from '@/components/map-view'
import { NavSidebar } from '@/components/nav-sidebar'
import { MAP_STYLES } from '@/app/constants/map-styles'
import type { MapStyle } from '@/app/types/map'
import { useToast } from "@/app/hooks/use-toast"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RoutePageProps {
  params: {
    slug: string
  }
}

export default function FeatureRoute({ params }: RoutePageProps) {
  const [mapInstance, setMapInstance] = useState<mapboxgl.Map | null>(null)
  const [selectedStyle, setSelectedStyle] = useState<MapStyle>('mapbox')
  const [mapillaryVisible, setMapillaryVisible] = useState(false)
  const [routeData, setRouteData] = useState<any>(null)
  const { toast } = useToast()

  // Initialize view state to route's starting point (will be updated when route loads)
  const [viewState, setViewState] = useState({
    longitude: 144.9631,
    latitude: -37.8136,
    zoom: 10
  })

  const [overlayStates, setOverlayStates] = useState({
    segments: true,  // Default to true since we're showing a route
    photos: false,
    'gravel-roads': true,  // Might want this on by default for context
    'asphalt-roads': false,
    'speed-limits': false,
    'private-roads': false,
    'water-points': true,  // Useful for route planning
    mapillary: false,
    'bike-infrastructure': true,
    'unknown-surface': false
  })

  // Load route data
  useEffect(() => {
    const fetchRouteData = async () => {
      try {
        const response = await fetch(`/api/routes/${params.slug}`)
        const data = await response.json()
        setRouteData(data)
        
        // Center map on route
        if (data.bounds) {
          const { _sw, _ne } = data.bounds
          mapInstance?.fitBounds(
            [
              [_sw.lng, _sw.lat],
              [_ne.lng, _ne.lat]
            ],
            { padding: 50 }
          )
        }
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load route data",
          variant: "destructive"
        })
      }
    }

    if (params.slug) {
      fetchRouteData()
    }
  }, [params.slug, mapInstance, toast])

  // Reuse all your existing handlers from the main page
  const handleSearch = useCallback((query: string) => {
    // ... same as main page
  }, [mapInstance, setViewState])

  const handleLocationClick = useCallback(() => {
    // ... same as main page
  }, [mapInstance, toast])

  const handleZoomIn = useCallback(() => {
    // ... same as main page
  }, [])

  const handleZoomOut = useCallback(() => {
    // ... same as main page
  }, [])

  const handleLayerToggle = useCallback((layerId: string) => {
    setOverlayStates(prev => ({
      ...prev,
      [layerId]: !prev[layerId]
    }))
  }, [])

  const handleStyleChange = useCallback((newStyle: MapStyle) => {
    // ... same as main page
  }, [])

  return (
    <div className="h-full w-full relative">
      <MapContext.Provider value={{ map: mapInstance, setMap: setMapInstance }}>
        <DrawModeProvider map={mapInstance}>
          {/* Route Info Panel */}
          {routeData && (
            <div className="fixed top-14 right-4 z-50 w-80">
              <Card>
                <CardHeader>
                  <CardTitle>{routeData.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      {routeData.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-sm font-medium">Distance</p>
                        <p className="text-sm">{routeData.distance}km</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Elevation Gain</p>
                        <p className="text-sm">{routeData.elevationGain}m</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Reuse existing components */}
          <NavSidebar 
            onSearch={handleSearch}
            onLocationClick={handleLocationClick}
            onZoomIn={handleZoomIn}
            onZoomOut={handleZoomOut}
            onLayerToggle={handleLayerToggle}
            selectedStyle={selectedStyle}
            onStyleChange={handleStyleChange}
            availableLayers={[]}
            mapillaryVisible={mapillaryVisible}
            overlayStates={overlayStates}
            className="z-[60]"
          />
          <MapView
            viewState={viewState}
            setViewState={setViewState}
            selectedStyle={selectedStyle}
            overlayStates={overlayStates}
            mapillaryVisible={mapillaryVisible}
            onMapInit={(map) => setMapInstance(map)}
            routeData={routeData}  // Pass route data to MapView
          />
        </DrawModeProvider>
      </MapContext.Provider>
    </div>
  )
}