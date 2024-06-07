"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const article_dal_1 = require("../dals/article.dal");
class ArticleService {
    constructor() {
        this.articleDal = new article_dal_1.ArticleDal();
    }
    async findAllArticles() {
        return await this.articleDal.findAllArticles();
    }
    async findArticleById(id) {
        return await this.articleDal.findArticleById(id);
    }
    async createArticle(articleData) {
        return await this.articleDal.createArticle(articleData);
    }
    async updateArticleById(id, articleData) {
        return await this.articleDal.updateArticleById(id, articleData);
    }
    async deleteArticleById(id) {
        return await this.articleDal.deleteArticleById(id);
    }
}
exports.ArticleService = ArticleService;
