"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
const article_service_1 = require("../services/article.service");
class ArticleController {
    constructor() {
        this.articleService = new article_service_1.ArticleService();
    }
    async findAllArticles(req, res) {
        console.log("Fetching all articles...");
        try {
            const articles = await this.articleService.findAllArticles();
            res.json(articles);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async findArticleById(req, res) {
        try {
            const id = req.params.id;
            const article = await this.articleService.findArticleById(id);
            if (article) {
                res.json(article);
            }
            else {
                res.status(404).send('Article not found');
            }
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async createArticle(req, res) {
        try {
            const articleData = req.body;
            const newArticle = await this.articleService.createArticle(articleData);
            res.status(201).json(newArticle);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async updateArticleById(req, res) {
        try {
            const id = req.params.id;
            const articleData = req.body;
            const updatedArticle = await this.articleService.updateArticleById(id, articleData);
            if (updatedArticle) {
                res.json(updatedArticle);
            }
            else {
                res.status(404).send('Article not found');
            }
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async deleteArticleById(req, res) {
        try {
            const id = req.params.id;
            const deletedArticle = await this.articleService.deleteArticleById(id);
            if (deletedArticle) {
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
exports.ArticleController = ArticleController;
