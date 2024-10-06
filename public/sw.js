// @TODO: workbox로 다시 구현

const cacheName = 'bcPWA-v1'

const contentToCache = [
  '/',
  '/favicon.svg',
  '/photo_upload.svg',
  '/reset.svg',
  '/main.js',
  '/manifest.json',
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
    // 정적 캐싱
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(contentToCache))
  )
})

// fetch에서 Promise로 response를 성공적으로 받게되면 respondWith와 같은 기능이 실행되기 전 상태
// fetch에서 Promise에서 resolve로 response를 성공적으로 받게되면 respondWith와 같은 기능이 실행한 후 상태
// respondWith와 같은 기능은 fetch 이벤트 안에서 1번만 실행이 가능한 것으로 예상됨
self.addEventListener('fetch', (event) => {
  // 콜백 함수 외부에 선언하는 경우 오프라인에서 1번만 사용가능(원인은 알 수 없음)
  const offlineResponse = new Response(offlinePage, {
    headers: {
      'Content-Type': 'text/html'
    }
  })
  const requestUrl = event.request.url
  const url = new URL(requestUrl)

  event
    .respondWith(
      fetch(requestUrl)
        .then(async (response) => {
          // 동적 캐싱 (로드되는 주소만 캐싱가능)
          await caches
            .open(cacheName)
            .then((cache) => {
              cache.put(
                url.pathname,
                response.clone()
              )
            })
          return response
        })
        .catch(() => (
          caches
            .match(url.pathname)
            .then((response) => response || offlineResponse)
        ))
    )
})
