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
exports.ArticleService = void 0;
const article_dal_1 = require("../dals/article.dal");
class ArticleService {
    constructor() {
        this.articleDal = new article_dal_1.ArticleDal();
    }
    findAllArticles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleDal.findAllArticles();
        });
    }
    findArticleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleDal.findArticleById(id);
        });
    }
    createArticle(articleData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleDal.createArticle(articleData);
        });
    }
    updateArticleById(id, articleData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleDal.updateArticleById(id, articleData);
        });
    }
    deleteArticleById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.articleDal.deleteArticleById(id);
        });
    }
}
exports.ArticleService = ArticleService;
