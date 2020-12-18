import logger from './Logger';

export const pErr = (err: Error) => {
  if (err) {
    logger.error(err.message, err);
  }
};

export const getRandomInt = () => {
  return Math.floor(Math.random() * 1_000_000_000_000);
};
