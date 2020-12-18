import { Request, Response } from 'express'
import TemplateDao from '@daos/Template'
import { StatusCodes } from 'http-status-codes';

const R = require('ramda');

const getOne = async (req: Request, res: Response) => {
  const template = await TemplateDao.getOne(req.params.id)

  if (R.isNil(template))
    return res.status(StatusCodes.NOT_FOUND).json({})
  res.json(template);
}

export default getOne;