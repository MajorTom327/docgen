import logger from '@shared/Logger';
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const R = require('ramda');

export default () => {
  const filePath = path.join(
    __dirname,
    'envVars.yml'
  );

  const file = fs.readFileSync(filePath, 'utf8')
  const config = yaml.parse(file)

  let missing: string[] = []
  // * Check required variables
  R.map((key: string) => {
    if (R.not(R.hasPath(['env', key], process))) {
      logger.error('Missing required variable %s', key);
      missing = [...missing, key];
    }
  }, R.keys(R.propOr({}, 'required', config)))

  // * Check optional var
  R.map((key: string) => {
    if (R.not(R.hasPath(['env', key], process))) {
      logger.warn('Missing optional variable %s', key);
    }
  }, R.keys(R.propOr({}, 'optional', config)))

  if (R.length(missing) > 0) {
    throw new Error('Missing var cannot start service')
  }
}

