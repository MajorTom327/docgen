import {
  pipe,
  gotenberg,
  convert,
  html,
  please,
  to,
  a4
} from 'gotenberg-js-client'

const R = require('ramda');

const converter = pipe(
  gotenberg(R.pathOr('http://localhost:3000', ['env', 'GOTENBERG_URL'], process)),
  convert,
  html,
  to(
    {
      paper: [8.27, 11.69], // * A4 format
      margins: [0, 0, 0, 0],
      landscape: false
    }
  ),
  please,
)

export default converter;