"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqDal = void 0;
const faq_model_1 = require("../models/Faq/faq-model");
class FaqDal {
    findAllFaqs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield faq_model_1.FaqModel.find().populate('category');
        });
    }
    findFaqById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield faq_model_1.FaqModel.findById(id).populate('category');
        });
    }
    createFaqItem(faqData) {
        return __awaiter(this, void 0, void 0, function* () {
            const faqItem = new faq_model_1.FaqModel(faqData);
            return yield faqItem.save();
        });
    }
    updateFaqItemById(id, faqData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield faq_model_1.FaqModel.findByIdAndUpdate(id, faqData, { new: true }).populate('category');
        });
    }
    deleteFaqItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield faq_model_1.FaqModel.findByIdAndDelete(id);
        });
    }
    getFaqsByCategoryId(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield faq_model_1.FaqModel.find({ category: categoryId }).populate('category');
        });
    }
}
exports.FaqDal = FaqDal;
