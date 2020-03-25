importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
)

/* workbox.precaching.precacheAndRoute(self.__WB_MANIFEST) */

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`)
} else {
  console.log(`Boo! Workbox didn't load 😬`)
}

/* workbox.setConfig({
  debug: true
}) */

workbox.routing.registerRoute(/\.js$/, new workbox.strategies.NetworkFirst())
