import 'regenerator-runtime'
import cacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption

self.addEventListener('install', (event) => {
  event.waitUntil(cacheHelper.cachingAppShell([
    ...assets,
    './',
    './images/hero-image_1-large.webp',
    './images/hero-image_1-small.webp',
    './images/hero-image_1-large.jpg',
    './images/hero-image_1-small.jpg'
  ]))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(cacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(cacheHelper.revalidateCache(event.request))
})
