import mongoose, { Schema } from 'mongoose';

import { IFaq } from '../Faq/faq-model';

export interface ICategoryFaq {
  _id: Schema.Types.ObjectId;
  name: string;
}

export interface ICategoryItemModel extends ICategoryFaq, Document {
  _id: Schema.Types.ObjectId;
}
const categoryFaqSchema = new mongoose.Schema<ICategoryFaq>({
  name: { type: String, required: true },
});

export const CategoryFaqModel = mongoose.model<ICategoryFaq>('CategoryFaq', categoryFaqSchema);
