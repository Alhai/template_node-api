"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFaqController = void 0;
const category_faq_service_1 = require("../services/category-faq.service");
class CategoryFaqController {
    constructor() {
        this.categoryFaqService = new category_faq_service_1.CategoryFaqService();
    }
    async findAllCategories(req, res) {
        try {
            const categories = await this.categoryFaqService.findAllCategories();
            res.json(categories);
        }
        catch (error) {
            res.status(500).send(error);
        }
    }
    async findCategoryById(req, res) {
        try {
            const id = req.params.id;
            const category = await this.categoryFaqService.findCategoryById(id);
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
    }
    async createCategory(req, res) {
        try {
            console.log("Creating Category with data:", req.body);
            const categoryData = req.body;
            const newCategory = await this.categoryFaqService.createCategory(categoryData);
            res.status(201).json(newCategory);
        }
        catch (error) {
            console.error("Error creating category:", error);
            res.status(500).send(error);
        }
    }
    async updateCategoryById(req, res) {
        try {
            const id = req.params.id;
            const categoryData = req.body;
            const updatedCategory = await this.categoryFaqService.updateCategoryById(id, categoryData);
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
    }
    async deleteCategoryById(req, res) {
        try {
            const id = req.params.id;
            const deletedCategory = await this.categoryFaqService.deleteCategoryById(id);
            if (deletedCategory) {
                res.status(204).send();
            }
            else {
                res.status(404).send('Category not found');
            }
        }
        catch (error) {
        }
    }
}
exports.CategoryFaqController = CategoryFaqController;
