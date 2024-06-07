// models/Faq/faq-model.ts
import mongoose, { Schema } from 'mongoose';

export interface IFaq {
  _id: Schema.Types.ObjectId;
  question: string;
  response: string;
}
export interface IFaqItemModel extends IFaq, Document {
  _id: Schema.Types.ObjectId;
}
const faqSchema = new mongoose.Schema<IFaq>({
  question: { type: String, required: true },
  response: { type: String, required: true },
});

export const FaqModel = mongoose.model<IFaq>('Faq', faqSchema);
