import { Request, Response } from 'express'; // Assumant l'utilisation d'Express
import { ArticleService } from '../services/article.service';
import { IArticle } from '../models/Article/article-model';

export class ArticleController {
    private articleService: ArticleService;

    constructor() {
        this.articleService = new ArticleService();
    }

    async findAllArticles(req: Request, res: Response) {
        console.log("Fetching all articles...");
        try {
            const articles = await this.articleService.findAllArticles();
            res.json(articles);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async findArticleById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const article = await this.articleService.findArticleById(id);
            if (article) {
                res.json(article);
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async createArticle(req: Request, res: Response) {
        try {
            const articleData: IArticle = req.body;
            const newArticle = await this.articleService.createArticle(articleData);
            res.status(201).json(newArticle);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async updateArticleById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const articleData: Partial<IArticle> = req.body;
            const updatedArticle = await this.articleService.updateArticleById(id, articleData);
            if (updatedArticle) {
                res.json(updatedArticle);
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error ) {
            res.status(500).send(error);
        }
    }

    async deleteArticleById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedArticle = await this.articleService.deleteArticleById(id);
            if (deletedArticle) {
                res.status(204).send(); 
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}
