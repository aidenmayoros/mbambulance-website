import { useSyncExternalStore } from 'react'
import L from 'leaflet'

import { cn } from '@/lib/utils'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import icon2x from 'leaflet/dist/images/marker-icon-2x.png'
import icon from 'leaflet/dist/images/marker-icon.png'
import shadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: icon2x,
  iconUrl: icon,
  shadowUrl: shadow,
})

/** 6335 Park Blvd, Joshua Tree, CA — approximate center for map display */
const POSITION = [34.13585, -116.3132]

/** Sized for the main footer map column (room freed by moving nav links below). */
const MAP_FRAME = 'h-[220px] w-full sm:h-[260px] lg:h-[280px]'

const noopSubscribe = () => () => {}

function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false)
}

function FooterMap() {
  const isClient = useIsClient()

  if (!isClient) {
    return (
      <div
        className={cn(
          MAP_FRAME,
          'rounded-xl border border-white/10 bg-slate-900/80',
        )}
        aria-hidden
      />
    )
  }

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
