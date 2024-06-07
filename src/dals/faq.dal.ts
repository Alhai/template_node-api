import { FaqModel, IFaq } from "../models/Faq/faq-model";

export class FaqDal {
    async findAllFaqs(): Promise<IFaq[]> {
        return await FaqModel.find().populate('category');
    }

    async findFaqById(id: string): Promise<IFaq | null> {
        return await FaqModel.findById(id).populate('category');
    }

    async createFaqItem(faqData: IFaq): Promise<IFaq> {
        const faqItem = new FaqModel(faqData);
        return await faqItem.save();
    }

    async updateFaqItemById(id: string, faqData: Partial<IFaq>): Promise<IFaq | null> {
        return await FaqModel.findByIdAndUpdate(id, faqData, { new: true }).populate('category');
      }

    async deleteFaqItemById(id: string): Promise<IFaq | null> {
        return await FaqModel.findByIdAndDelete(id);
    }
    
}
