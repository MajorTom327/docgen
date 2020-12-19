import { Request, Response } from 'express'
import TemplateDao from '@daos/Template'
import { StatusCodes } from 'http-status-codes';

const R = require('ramda');

const getOneFromName = async (req: Request, res: Response) => {
  const template = await TemplateDao.getOneFrom({ name: req.params.name })

  if (R.isNil(template))
    return res.status(StatusCodes.NOT_FOUND).json({})
  res.json(template);
}

export default getOneFromName;