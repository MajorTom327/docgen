import { Request, Response } from 'express';
import TemplateDao from '@daos/Template';
import { StatusCodes } from 'http-status-codes';
import { ITemplate } from '@entities/Template';
import converter from '@services/gotenberg';

const R = require('ramda');

const fromId = (req: Request, res: Response) => {
  TemplateDao.getOne(req.params.id)
    .then(async (template) => {
      if (R.isNil(template)) return res.status(StatusCodes.NOT_FOUND).json({});
      // * Render pdf from service
      const pdf = await converter(template!.html);
      res.setHeader('content-type', 'application/pdf');
      pdf.pipe(res);
    })
    .catch((err) => {
      res.status(StatusCodes.NOT_FOUND).json({});
    })
}

export default fromId;