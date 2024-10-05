// @TODO: workbox로 다시 구현

const cacheName = 'bcPWA-v1'

const contentToCache = [
  '/',
  '/favicon.svg',
  '/photo_upload.svg',
  '/reset.svg',
  '/main.js',
  '/index.html'
]

const offlinePage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Best Choice</title>
    <style>
      body {
        margin: 0px;
      }
      .root {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>
  <body>
    <div class="root">
      <strong>인터넷 연결이 필요합니다.</strong>
    </div>
  </body>
</html>
`

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(contentToCache))
  )
})

self.addEventListener('fetch', (event) => {
  const offlineResponse = new Response(offlinePage, {
    headers: {
      'Content-Type': 'text/html'
    }
  })

  const url = new URL(event.request.url)

  if (contentToCache.includes(url.pathname)) {
    event.respondWith(
      caches
        .match(url.pathname)
        .then(response => response || offlineResponse)
    )
  }
})
