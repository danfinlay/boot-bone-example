const createServer = require('boot-bone/server')

const bootloaderPath = require.resolve('./bootloader.js')

const app = createServer({
  bootloaderPath,
})

app.listen(3000, () => {
  console.log('listening on 3000')
})
