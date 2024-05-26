"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryFaqRouter = void 0;
const category_faq_controller_1 = require("../controllers/category-faq.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.categoryFaqRouter = router;
const categoryFaqController = new category_faq_controller_1.CategoryFaqController();
router.get('', (req, res) => categoryFaqController.findAllCategories(req, res));
router.get('/:id', (req, res) => categoryFaqController.findCategoryById(req, res));
router.post('', (req, res) => categoryFaqController.createCategory(req, res));
router.put('/:id', (req, res) => categoryFaqController.updateCategoryById(req, res));
router.delete('/:id', (req, res) => categoryFaqController.deleteCategoryById(req, res));
