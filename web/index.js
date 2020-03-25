import spots from './spots.js'

mapboxgl.accessToken =
  'pk.eyJ1IjoibW9ybmlyIiwiYSI6ImNqd2M4enJpNTBxbWczeW1vbDVjcDM4NnIifQ.zwa39B8l8SKyri1RDUKqDg'

const map = new mapboxgl.Map({
  container: 'map', // HTML container id
  style: 'mapbox://styles/mapbox/streets-v9', // style URL
  center: [7.25188, 47.139673], // starting position as [lng, lat]
  zoom: 13
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl())
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true
    },
    trackUserLocation: true
  })
)

// add markers to map
spots.forEach(spot => {
  // create a HTML element for each feature
  /*   const el = document.createElement('div')
  el.className = 'marker' */

  // make a marker for each feature and add to the map
  new mapboxgl.Marker({ color: '#c40a0d' }).setLngLat(spot).addTo(map)
})

// Use the window load event to keep the page load performant
window.addEventListener('load', () => {
  navigator.serviceWorker.register('sw.js')
})
