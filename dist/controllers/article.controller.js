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
exports.ArticleController = void 0;
const article_service_1 = require("../services/article.service");
class ArticleController {
    constructor() {
        this.articleService = new article_service_1.ArticleService();
    }
    findAllArticles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Fetching all articles...");
            try {
                const articles = yield this.articleService.findAllArticles();
                res.json(articles);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    findArticleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const article = yield this.articleService.findArticleById(id);
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
        });
    }
    createArticle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const articleData = req.body;
                const newArticle = yield this.articleService.createArticle(articleData);
                res.status(201).json(newArticle);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    updateArticleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const articleData = req.body;
                const updatedArticle = yield this.articleService.updateArticleById(id, articleData);
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
        });
    }
    deleteArticleById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedArticle = yield this.articleService.deleteArticleById(id);
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
        });
    }
}
exports.ArticleController = ArticleController;
