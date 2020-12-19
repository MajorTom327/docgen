import Template, { ITemplate } from '@entities/Template'

export default interface ITemplateDao {
  save: (template: ITemplate | typeof Template) => Promise<ITemplate>,
  getOne: (id: string) => Promise<ITemplate | null>,
  getOneFrom: (filter: Record<string, unknown>) => Promise<ITemplate | null>,
  getAll: (filter?: Record<string, unknown>) => Promise<ITemplate[] | null>,
  update: (id: string, template: ITemplate) => Promise<ITemplate>,
  remove: (id: string) => Promise<null>,
}