/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Request, Response } from 'express';
import TemplateDao from '@daos/Template';
import { StatusCodes } from 'http-status-codes';
import converter from '@services/gotenberg';
import ejs from 'ejs';

const R = require('ramda');

const fromName = (req: Request, res: Response) => {
  TemplateDao.getOneFrom({ name: req.params.name })
    .then(async (template) => {
      if (R.isNil(template)) return res.status(StatusCodes.NOT_FOUND).json({});

      // * Build HTML
      const variables = R.propOr({}, 'body', req);
      const html = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${R.propOr('', 'name', template)}</title>
          <style>body {font-familly: 'Roboto', sans-serif}</style>
          <style>${R.propOr('', 'css', template)}</style>
        </head>
        <body>
          ${R.propOr('', 'html', template)}
        </body>
      </html>
      `
      const rendered = ejs.render(html, variables);

      // * Render from service
      const pdf = await converter(rendered);
      res.setHeader('content-type', 'application/pdf');
      pdf.pipe(res);
      // res.json(template);
    })
    .catch((err) => {
      res.status(StatusCodes.NOT_FOUND).json({});
    })
}

export default fromName;