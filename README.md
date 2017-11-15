# boot-bone-example

this is an example of running an app over the [`boot-bone`](https://github.com/kumavis/boot-bone/) bootloader and pulling it down over ipfs

### usage

 - create bootloader with publisher strategy (`./bootloader.js`)
 - create server (`./server.js`)

### todo

- [ ] first time boot is slow
  - [ ] consider bundle initial version
  - [ ] consider lazy load assets
- [ ] ipns requires trusted api
- [ ] download update when ipns changes
- [ ] need control over current version (e.g. revert)
- [ ] need to remove old versions
- [ ] demo is boring, do something more interesting