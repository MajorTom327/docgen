import Template, { ITemplate } from '@entities/Template';
import logger from '@shared/Logger';
import ITemplateDao from './ITemplateDao'

const R = require('ramda');

const save = (template: ITemplate | typeof Template): Promise<ITemplate> => {
  if (template instanceof Template)
    return template.save();
  return new Template(template).save();
}

const getOne = (id: string): Promise<ITemplate | null> => {
  return Template.findById(id).exec();
}

const getOneFrom = (filter: Record<string, unknown>): Promise<ITemplate | null> => {
  return Template.findOne(filter).exec();
}

const getAll = (filter?: Record<string, unknown>): Promise<ITemplate[] | null> => {
  return Template.find(R.defaultTo({}, filter)).exec();
}

const update = (id: string, template: ITemplate): Promise<ITemplate> => {
  return new Promise((resolve, reject) => {
    Template.findById(id).exec()
      .then((t: ITemplate | null) => {
        if (R.isNil(t)) {
          logger.debug('Cannot find template');
          return reject(null)
        }
        const t2 = new Template(template);
        t2.isNew = false;
        t2._id = id
        // * Save
        t2.save()
          .then(resolve)
          .catch(reject)
      }).catch((err: any) => {
        logger.error('Cannot find', err)
        reject(err)
      });
  })
}

const remove = (id: string): Promise<null> => {
  return new Promise(
    (resolve, reject) => {
      Template.deleteOne({ _id: id })
        .exec((err: any) => {
          logger.error(err);
          if (R.isNil(err)) return resolve(null);
          reject(err);
        })
    });
}


const dao: ITemplateDao = {
  getOne,
  getOneFrom,
  getAll,
  save,
  remove,
  update
}

export default dao