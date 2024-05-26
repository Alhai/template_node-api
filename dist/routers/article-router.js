"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleRouter = void 0;
const express_1 = __importDefault(require("express"));
const article_controller_1 = require("../controllers/article.controller");
const router = express_1.default.Router();
exports.articleRouter = router;
const articleController = new article_controller_1.ArticleController();
// Définition des routes
router.get('/all', (req, res) => articleController.findAllArticles(req, res));
router.get('/:id', (req, res) => articleController.findArticleById(req, res));
router.post('/create', (req, res) => articleController.createArticle(req, res));
router.put('/:id', (req, res) => articleController.updateArticleById(req, res));
router.delete('/:id', (req, res) => articleController.deleteArticleById(req, res));
