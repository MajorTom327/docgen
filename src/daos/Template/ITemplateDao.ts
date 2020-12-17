import ITemplate from '@entities/Template'

export default interface ITemplateDao {
  getAll: () => Promise<ITemplate | null>
}