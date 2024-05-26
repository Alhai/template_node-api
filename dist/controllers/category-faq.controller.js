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
exports.CategoryFaqController = void 0;
const category_faq_service_1 = require("../services/category-faq.service");
class CategoryFaqController {
    constructor() {
        this.categoryFaqService = new category_faq_service_1.CategoryFaqService();
    }
    findAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield this.categoryFaqService.findAllCategories();
                res.json(categories);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    findCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const category = yield this.categoryFaqService.findCategoryById(id);
                if (category) {
                    res.json(category);
                }
                else {
                    res.status(404).send('Category not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Creating Category with data:", req.body);
                const categoryData = req.body;
                const newCategory = yield this.categoryFaqService.createCategory(categoryData);
                res.status(201).json(newCategory);
            }
            catch (error) {
                console.error("Error creating category:", error);
                res.status(500).send(error);
            }
        });
    }
    updateCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const categoryData = req.body;
                const updatedCategory = yield this.categoryFaqService.updateCategoryById(id, categoryData);
                if (updatedCategory) {
                    res.json(updatedCategory);
                }
                else {
                    res.status(404).send('Category not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    deleteCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedCategory = yield this.categoryFaqService.deleteCategoryById(id);
                if (deletedCategory) {
                    res.status(204).send();
                }
                else {
                    res.status(404).send('Category not found');
                }
            }
            catch (error) {
            }
        });
    }
}
exports.CategoryFaqController = CategoryFaqController;
