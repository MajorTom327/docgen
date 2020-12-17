import { Request, Response } from 'express'
import TemplateDao from '@daos/Template'
import { StatusCodes } from 'http-status-codes';

const R = require('ramda');

const getAll = async (req: Request, res: Response) => {
  const templates = await TemplateDao.getAll()

  if (R.isNil(templates))
    return res.status(StatusCodes.NOT_FOUND).json({})
  res.json(templates);
}

export default getAll