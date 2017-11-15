module.exports = createBackgroundProcess

function createBackgroundProcess({ currentDisk, fetchRequestQueue }) {
  setupAssetServer(fetchRequestQueue, currentDisk)
}

// intercept requests from page
function setupAssetServer (fetchRequestQueue, db) {
  fetchRequestQueue.on('data', (event) => {
    const req = event.request
    const url = new URL(req.url)

    // only intercept same domain
    if (url.origin !== location.origin) return

    // respond with local content
    event.respondWith((async () => {
      let path = url.pathname.slice()
      // server apex
      if (path === '/') path = '/index.html'
      // serve asset
      console.log('asset server saw request:', path)
      const body = await db.get(path)
      return new Response(body)
    })())
  })
}
