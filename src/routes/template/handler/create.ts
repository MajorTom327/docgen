import { Request, Response } from 'express'
import TemplateDao from '@daos/Template'
import { StatusCodes } from 'http-status-codes';
import { ITemplate } from '@entities/Template';

const R = require('ramda');

const create = async (req: Request, res: Response) => {
  const bodyTemp: ITemplate = req.body;
  //Todo: Add ajv validation to ensure data are right

  TemplateDao.save(bodyTemp)
    .then((template) => { res.json(template) })
    .catch((err: any) => res.status(StatusCodes.BAD_REQUEST).json(err))
}

export default create