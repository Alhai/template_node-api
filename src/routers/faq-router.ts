import express, { Request, Response } from 'express';

import { FaqController } from '../controllers/faq.controller';

const router = express.Router();
const faqController = new FaqController();

router.get('/', (req: Request, res: Response) => faqController.findAllFaqs(req, res));
router.get('/:id', (req: Request, res: Response) => faqController.findFaqById(req, res));
router.post('/', (req: Request, res: Response) => faqController.createFaqItem(req, res));
router.put('/:id', (req: Request, res: Response) => faqController.updateFaqItemById(req, res));
router.delete('/:id', (req: Request, res: Response) => faqController.deleteFaqItemById(req, res));
// router.get('/category/:id', (req, res) => faqController.findFaqsByCategoryId(req, res));

export { router as faqRouter };
