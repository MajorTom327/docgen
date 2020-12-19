import mongoose, { Schema, Document } from 'mongoose'

export interface ITemplate extends Document {
  html: string
  css: string
  name: string
}

const TemplateSchema: Schema = new Schema({
  html: { type: String, required: true },
  css: { type: String },
  name: { type: String, required: true }
}, { versionKey: false })

export default mongoose.model<ITemplate>('template', TemplateSchema);