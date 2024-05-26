// models/Faq/faq-model.ts
import mongoose, { Schema } from 'mongoose';

import { ICategoryFaq } from '../CategoryFaq/category-faq-model';

export interface IFaq {
  question: string;
  response: string;
  category: ICategoryFaq['_id'];
}

const faqSchema = new mongoose.Schema<IFaq>({
  question: { type: String, required: true },
  response: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'CategoryFaq', required: true }
});

export const FaqModel = mongoose.model<IFaq>('Faq', faqSchema);
