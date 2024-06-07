"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleDal = void 0;
const article_model_1 = require("../models/Article/article-model");
class ArticleDal {
    // Rechercher tous les articles
    async findAllArticles() {
        return await article_model_1.ArticleModel.find();
    }
    // Trouver un article par ID
    async findArticleById(id) {
        return await article_model_1.ArticleModel.findById(id);
    }
    // Créer un nouvel article
    async createArticle(articleData) {
        const article = new article_model_1.ArticleModel(articleData);
        return await article.save();
    }
    // Mettre à jour un article par ID, utiliser IArticle pour permettre des mises à jour
    async updateArticleById(id, articleData) {
        return await article_model_1.ArticleModel.findByIdAndUpdate(id, articleData, { new: true });
    }
    // Supprimer un article par ID
    async deleteArticleById(id) {
        return await article_model_1.ArticleModel.findByIdAndDelete(id);
    }
}
exports.ArticleDal = ArticleDal;
