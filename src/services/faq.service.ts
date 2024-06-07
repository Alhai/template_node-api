import { FaqDal } from "../dals/faq.dal";
import { IFaq } from "../models/Faq/faq-model";

export class FaqService {
    private faqDal: FaqDal;

    constructor() {
        this.faqDal = new FaqDal();
    }

    async findAllFaqs(): Promise<IFaq[]> {
        return await this.faqDal.findAllFaqs();
    }

    async findFaqById(id: string): Promise<IFaq | null> {
        return await this.faqDal.findFaqById(id);
    } 

    async createFaqItem(faqData: IFaq): Promise<IFaq> {
        return await this.faqDal.createFaqItem(faqData);
    }

    async updateFaqItemById(id: string, faqData: Partial<IFaq>): Promise<IFaq | null> {
        return await this.faqDal.updateFaqItemById(id, faqData);
    }

    async deleteFaqItemById(id: string): Promise<IFaq | null> {
        return await this.faqDal.deleteFaqItemById(id);
    }
    // async getFaqsByCategoryId(categoryId: string): Promise<IFaq[]> {
    //     return await this.faqDal.getFaqsByCategoryId(categoryId)
    // }
}
