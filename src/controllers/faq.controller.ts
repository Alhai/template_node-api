import { FaqModel, IFaq } from '../models/Faq/faq-model';
import { Request, Response } from 'express';

import { FaqService } from '../services/faq.service';

export class FaqController {
    private faqService: FaqService;

    constructor() {
        this.faqService = new FaqService();
    }

    async findAllFaqs(req: Request, res: Response) {
        console.log("Fetching all articles...");
        try {
            const faqs = await this.faqService.findAllFaqs();
            res.json(faqs);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async findFaqsByCategoryId(req: Request, res: Response) {
        try {
            // Utiliser une assertion de type pour dire à TypeScript que c'est une chaîne
            const categoryId = req.query.category as string;
    
            const faqs = await this.faqService.getFaqsByCategoryId(categoryId);
            if (faqs.length > 0) {
                res.json(faqs);
            } else {
                res.status(404).send('No FAQs found for this category');
            }
        } catch (error) {
            res.status(500).send(error || 'Internal server error');
        }
    }
    
    

    async findFaqById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const faqItem = await this.faqService.findFaqById(id);
            if (faqItem) {
                res.json(faqItem);
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async createFaqItem(req: Request, res: Response) {
        console.log("Received data:", req.body);
        try {
            const { question, response, categoryId } = req.body;
            const faqData = new FaqModel({
                question,
                response,
                category: categoryId
            });
            const newFaqItem = await faqData.save();
            res.status(201).json(newFaqItem);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async updateFaqItemById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const faqData: Partial<IFaq> = { ...req.body, category: req.body.categoryId };
            const updatedFaqItem = await this.faqService.updateFaqItemById(id, faqData);
            if (updatedFaqItem) {
                res.json(updatedFaqItem);
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async deleteFaqItemById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedFaqItem = await this.faqService.deleteFaqItemById(id);
            if (deletedFaqItem) {
                res.status(204).send();
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
