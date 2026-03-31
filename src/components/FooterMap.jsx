import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

import 'leaflet/dist/leaflet.css'

import icon2x from 'leaflet/dist/images/marker-icon-2x.png'
import icon from 'leaflet/dist/images/marker-icon.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'

const POSITION = [34.13585, -116.3132]
const MAP_FRAME = 'h-[220px] w-full sm:h-[260px] lg:h-[280px]'
const ADDRESS_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=6335%20Park%20Blvd%2C%20Joshua%20Tree%2C%20CA%2092252'

function FooterMap() {
  const [mapParts, setMapParts] = useState(null)
  const [mapFailedToLoad, setMapFailedToLoad] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function loadMap() {
      try {
        const leafletModule = await import('leaflet')
        const reactLeafletModule = await import('react-leaflet')

        const leaflet = leafletModule.default

        delete leaflet.Icon.Default.prototype._getIconUrl
        leaflet.Icon.Default.mergeOptions({
          iconRetinaUrl: icon2x,
          iconUrl: icon,
          shadowUrl: shadow,
        })

        if (!isMounted) {
          return
        }

        setMapParts({
          MapContainer: reactLeafletModule.MapContainer,
          Marker: reactLeafletModule.Marker,
          Popup: reactLeafletModule.Popup,
          TileLayer: reactLeafletModule.TileLayer,
        })
      } catch (error) {
        console.error('Unable to load footer map.', error)

        if (isMounted) {
          setMapFailedToLoad(true)
        }
      }
    }

    loadMap()

    return () => {
      isMounted = false
    }
  }, [])

  if (!mapParts || mapFailedToLoad) {
    return (
      <a
        href={ADDRESS_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          MAP_FRAME,
          'flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 px-5 text-center text-sm text-slate-300 transition-colors hover:border-white/20 hover:text-white',
        )}
      >
        View MBA on Google Maps
      </a>
    )
  }

  const { MapContainer, Marker, Popup, TileLayer } = mapParts

  return (
    <div
      className={cn(
        MAP_FRAME,
        'overflow-hidden rounded-xl border border-white/10',
      )}
    >
      <MapContainer
        center={POSITION}
        zoom={14}
        scrollWheelZoom={false}
        className="z-0 h-full w-full [&_.leaflet-control-attribution]:text-[10px] [&_.leaflet-control-attribution]:text-slate-600"
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={POSITION}>
          <Popup>
            Morongo Basin Ambulance
            <br />
            6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default FooterMap
