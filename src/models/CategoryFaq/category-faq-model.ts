import mongoose from 'mongoose';

export interface ICategoryFaq {
    _id: string | null
  name: string;
}

const categoryFaqSchema = new mongoose.Schema<ICategoryFaq>({
  name: { type: String, required: true },
});

export const CategoryFaqModel = mongoose.model<ICategoryFaq>('CategoryFaq', categoryFaqSchema);
