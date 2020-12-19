/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { ITemplate } from '@entities/Template';
import ejs from 'ejs';

const R = require('ramda');

const render = (template: ITemplate, variables: Record<string, unknown>): string => {
  const html = `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>${R.propOr('', 'name', template)}</title>
          <style>${R.propOr('', 'css', template)}</style>
        </head>
        <body>
          ${R.propOr('', 'html', template)}
        </body>
      </html>
      `
  return ejs.render(html, variables);
}

export default render;