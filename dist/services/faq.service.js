"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqService = void 0;
const faq_dal_1 = require("../dals/faq.dal");
class FaqService {
    constructor() {
        this.faqDal = new faq_dal_1.FaqDal();
    }
    async findAllFaqs() {
        return await this.faqDal.findAllFaqs();
    }
    async findFaqById(id) {
        return await this.faqDal.findFaqById(id);
    }
    async createFaqItem(faqData) {
        return await this.faqDal.createFaqItem(faqData);
    }
    async updateFaqItemById(id, faqData) {
        return await this.faqDal.updateFaqItemById(id, faqData);
    }
    async deleteFaqItemById(id) {
        return await this.faqDal.deleteFaqItemById(id);
    }
}
exports.FaqService = FaqService;
