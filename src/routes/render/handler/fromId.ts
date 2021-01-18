import { Request, Response } from 'express';
import TemplateDao from '@daos/Template';
import { StatusCodes } from 'http-status-codes';
import converter from '@services/gotenberg';
import render from './render'


const R = require('ramda');

const fromId = (req: Request, res: Response) => {
  TemplateDao.getOne(req.params.id)
    .then(async (template) => {
      if (R.isNil(template)) return res.status(StatusCodes.NOT_FOUND).json({});

      // * Build HTML
      const variables = R.propOr({}, 'body', req);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const renderedHtml = render(template!, variables);

      // * Render pdf from service
      const pdf = await converter(renderedHtml);
      res.setHeader('content-type', 'application/pdf');
      res.setHeader('content-transfer-encoding', 'base64')
      res.setHeader('content-disposition', 'attachment')
      pdf.pipe(res);
    })
    .catch((err: any) => {
      res.status(StatusCodes.NOT_FOUND).json({});
    })
}

export default fromId;