import ITemplate from '@entities/Template';
import ITemplateDao from './ITemplateDao'

const getAll = (): Promise<ITemplate | null> => {
  return Promise.resolve(null);
}

const dao: ITemplateDao = {
  getAll
}

export default dao