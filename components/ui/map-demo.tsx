import { DottedMap, Marker } from "./dotted-map"

const markers: Marker[] = [
  {
    lat: 37.5665,
    lng: 126.978,
    size: 0.3,
  },
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
    pulse: false,
  },
]

export function Component() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg ">
      <div className="to-background absolute inset-0 bg-radial from-transparent to-200%" />
      <DottedMap markers={markers} pulse />
    </div>
  )
}
