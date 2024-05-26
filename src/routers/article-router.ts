import express, { Request, Response } from 'express';

import { ArticleController } from '../controllers/article.controller';

const router = express.Router();
const articleController = new ArticleController();

// Définition des routes
router.get('/all', (req: Request, res: Response) => articleController.findAllArticles(req, res));
router.get('/:id', (req: Request, res: Response) => articleController.findArticleById(req, res));
router.post('/create', (req: Request, res: Response) => articleController.createArticle(req, res));
router.put('/:id', (req: Request, res: Response) => articleController.updateArticleById(req, res));
router.delete('/:id', (req: Request, res: Response) => articleController.deleteArticleById(req, res));

export { router as articleRouter };
