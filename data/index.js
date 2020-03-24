const fs = require('fs')

const spots = require('./ch.bfe.bikesharing.json')

function processSpots() {
  const processedSpots = spots.features
    .filter(
      spot =>
        spot.properties.city === 'Biel/Bienne' &&
        spot.properties.providerDE === 'velospot' &&
        spot.geometry.type === 'Point'
    )
    .map(spot => spot.geometry.coordinates)

  console.log(processedSpots.length)

  const content = 'export default ' + JSON.stringify(processedSpots)

  fs.writeFileSync('../web/spots.js', content)
}

processSpots()
