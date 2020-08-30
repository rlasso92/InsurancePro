import './config'
import log from 'loglevel'

function greet(name: string) {
  log.debug(`>>> Function 'greet' is called with ${name}`)
  console.log(`Hello, ${name}!`)
}

log.info(`>>> Node + Typescript is running`)
greet('Argentinux')
