import { Request, Response } from 'express'
import TemplateDao from '@daos/Template'
import { StatusCodes } from 'http-status-codes';
import Template, { ITemplate } from '@entities/Template';
import logger from '@shared/Logger';

const R = require('ramda');

const create = async (req: Request, res: Response) => {
  const id = req.params.id;
  const bodyTemp: ITemplate = req.body;
  //Todo: Add ajv validation to ensure data are right

  TemplateDao.update(id, bodyTemp)
    .then((data) => { res.json(data) })
    .catch(() => { res.status(StatusCodes.BAD_REQUEST).json({}) })

  // TemplateDao.getOne(id)
  //   .then((template) => {
  //     const d = new Template(template);

  //     TemplateDao.save(d)
  //       .then((data) => { res.json(data) })

  //   }).catch((err) => {
  //     return res.status(StatusCodes.NOT_FOUND).json(err)
  //   })


  // if (R.isNil(template))
  //   return res.status(StatusCodes.BAD_REQUEST).json({})
  // res.json(template);
}

export default create