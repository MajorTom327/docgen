import Template, { ITemplate } from '@entities/Template'

export default interface ITemplateDao {
  save: (template: ITemplate | typeof Template) => Promise<ITemplate>,
  getOne: (id: string) => Promise<ITemplate | null>,
  getAll: () => Promise<ITemplate[] | null>,
  update: (id: string, template: ITemplate) => Promise<ITemplate>,
  remove: (id: string) => Promise<null>,
}