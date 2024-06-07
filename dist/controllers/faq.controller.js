"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaqController = void 0;
const faq_model_1 = require("../models/Faq/faq-model");
const faq_service_1 = require("../services/faq.service");
class FaqController {
    constructor() {
        this.faqService = new faq_service_1.FaqService();
    }
    async findAllFaqs(req, res) {
        console.log("Fetching all articles...");
        try {
            const faqs = await this.faqService.findAllFaqs();
            res.json(faqs);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    // async findFaqsByCategoryId(req: Request, res: Response) {
    //     try {
    //         // Utiliser une assertion de type pour dire à TypeScript que c'est une chaîne
    //         const categoryId = req.query.category as string;
    //         const faqs = await this.faqService.getFaqsByCategoryId(categoryId);
    //         if (faqs.length > 0) {
    //             res.json(faqs);
    //         } else {
    //             res.status(404).send('No FAQs found for this category');
    //         }
    //     } catch (error) {
    //         res.status(500).send(error || 'Internal server error');
    //     }
    // }
    async findFaqById(req, res) {
        try {
            const id = req.params.id;
            const faqItem = await this.faqService.findFaqById(id);
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
    }
    async createFaqItem(req, res) {
        console.log("Received data:", req.body);
        try {
            const { question, response, categoryId } = req.body;
            const faqData = new faq_model_1.FaqModel({
                question,
                response,
                category: categoryId
            });
            const newFaqItem = await faqData.save();
            res.status(201).json(newFaqItem);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async updateFaqItemById(req, res) {
        try {
            const id = req.params.id;
            const faqData = { ...req.body, category: req.body.categoryId };
            const updatedFaqItem = await this.faqService.updateFaqItemById(id, faqData);
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
    }
    async deleteFaqItemById(req, res) {
        try {
            const id = req.params.id;
            const deletedFaqItem = await this.faqService.deleteFaqItemById(id);
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
    }
}
exports.FaqController = FaqController;
