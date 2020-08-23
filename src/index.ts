import log from 'loglevel'
import { __LOG_LEVEL__ } from './config'

log.setLevel(__LOG_LEVEL__)

function greet(name: string) {
  log.debug(`>>> Function 'greet' is called with ${name}`)
  console.log(`Hello, ${name}!`)
}

log.info(`>>> Node + Typescript is running`)
greet('Argentinux')
