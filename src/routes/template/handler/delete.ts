import { Request, Response } from 'express'
import TemplateDao from '@daos/Template'
import { StatusCodes } from 'http-status-codes';
import { ITemplate } from '@entities/Template';

const R = require('ramda');

const deleteHandler = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  TemplateDao.remove(id)
    .then(() => res.status(StatusCodes.NO_CONTENT).json({ ok: true }))
    .catch((err: any) => res.status(StatusCodes.BAD_REQUEST).json(err))
}

export default deleteHandler;