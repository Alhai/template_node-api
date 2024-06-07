"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqDal = void 0;
const faq_model_1 = require("../models/Faq/faq-model");
class FaqDal {
    async findAllFaqs() {
        return await faq_model_1.FaqModel.find().populate('category');
    }
    async findFaqById(id) {
        return await faq_model_1.FaqModel.findById(id).populate('category');
    }
    async createFaqItem(faqData) {
        const faqItem = new faq_model_1.FaqModel(faqData);
        return await faqItem.save();
    }
    async updateFaqItemById(id, faqData) {
        return await faq_model_1.FaqModel.findByIdAndUpdate(id, faqData, { new: true }).populate('category');
    }
    async deleteFaqItemById(id) {
        return await faq_model_1.FaqModel.findByIdAndDelete(id);
    }
}
exports.FaqDal = FaqDal;
