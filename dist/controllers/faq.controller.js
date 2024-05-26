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
exports.FaqController = void 0;
const faq_model_1 = require("../models/Faq/faq-model");
const faq_service_1 = require("../services/faq.service");
class FaqController {
    constructor() {
        this.faqService = new faq_service_1.FaqService();
    }
    findAllFaqs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Fetching all articles...");
            try {
                const faqs = yield this.faqService.findAllFaqs();
                res.json(faqs);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    findFaqsByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Utiliser une assertion de type pour dire à TypeScript que c'est une chaîne
                const categoryId = req.query.category;
                const faqs = yield this.faqService.getFaqsByCategoryId(categoryId);
                if (faqs.length > 0) {
                    res.json(faqs);
                }
                else {
                    res.status(404).send('No FAQs found for this category');
                }
            }
            catch (error) {
                res.status(500).send(error || 'Internal server error');
            }
        });
    }
    findFaqById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const faqItem = yield this.faqService.findFaqById(id);
                if (faqItem) {
                    res.json(faqItem);
                }
                else {
                    res.status(404).send('Article not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    createFaqItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Received data:", req.body);
            try {
                const { question, response, categoryId } = req.body;
                const faqData = new faq_model_1.FaqModel({
                    question,
                    response,
                    category: categoryId
                });
                const newFaqItem = yield faqData.save();
                res.status(201).json(newFaqItem);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    updateFaqItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const faqData = Object.assign(Object.assign({}, req.body), { category: req.body.categoryId });
                const updatedFaqItem = yield this.faqService.updateFaqItemById(id, faqData);
                if (updatedFaqItem) {
                    res.json(updatedFaqItem);
                }
                else {
                    res.status(404).send('Article not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    deleteFaqItemById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedFaqItem = yield this.faqService.deleteFaqItemById(id);
                if (deletedFaqItem) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Article not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.FaqController = FaqController;
