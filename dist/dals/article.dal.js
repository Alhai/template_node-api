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
exports.ArticleDal = void 0;
const article_model_1 = require("../models/Article/article-model");
class ArticleDal {
    // Rechercher tous les articles
    findAllArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield article_model_1.ArticleModel.find();
        });
    }
    // Trouver un article par ID
    findArticleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield article_model_1.ArticleModel.findById(id);
        });
    }
    // Créer un nouvel article
    createArticle(articleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const article = new article_model_1.ArticleModel(articleData);
            return yield article.save();
        });
    }
    // Mettre à jour un article par ID, utiliser IArticle pour permettre des mises à jour
    updateArticleById(id, articleData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield article_model_1.ArticleModel.findByIdAndUpdate(id, articleData, { new: true });
        });
    }
    // Supprimer un article par ID
    deleteArticleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield article_model_1.ArticleModel.findByIdAndDelete(id);
        });
    }
}
exports.ArticleDal = ArticleDal;
