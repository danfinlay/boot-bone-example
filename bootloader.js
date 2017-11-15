const createIpfsPublisher = require('boot-bone/ipfsPublisher')
const createBootloader = require('boot-bone/bootloader')

const publisher = createIpfsPublisher({ target: '/ipns/QmYYREaJWkG2YC3G4MBV5wULFY3Gyw2djnXsnZEQGo9iao' })
const bootloader = createBootloader({ publisher })
bootloader.start().catch(console.error)
