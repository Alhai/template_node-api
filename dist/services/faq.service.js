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
exports.FaqService = void 0;
const faq_dal_1 = require("../dals/faq.dal");
class FaqService {
    constructor() {
        this.faqDal = new faq_dal_1.FaqDal();
    }
    findAllFaqs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqDal.findAllFaqs();
        });
    }
    findFaqById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqDal.findFaqById(id);
        });
    }
    createFaqItem(faqData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqDal.createFaqItem(faqData);
        });
    }
    updateFaqItemById(id, faqData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqDal.updateFaqItemById(id, faqData);
        });
    }
    deleteFaqItemById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqDal.deleteFaqItemById(id);
        });
    }
    getFaqsByCategoryId(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.faqDal.getFaqsByCategoryId(categoryId);
        });
    }
}
exports.FaqService = FaqService;
