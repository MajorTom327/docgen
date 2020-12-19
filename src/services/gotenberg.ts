import { pipe, gotenberg, convert, html, please } from 'gotenberg-js-client'

const R = require('ramda');

const converter = pipe(
  gotenberg(R.pathOr('http://localhost:3000', ['env', 'GOTEBERG_URL'], process)),
  convert,
  html,
  please
)

export default converter;