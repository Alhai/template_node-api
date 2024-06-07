"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFaqService = void 0;
const category_faq_dal_1 = require("../dals/category-faq.dal");
class CategoryFaqService {
    constructor() {
        this.categoryFaqDal = new category_faq_dal_1.CategoryFaqDal();
    }
    async findAllCategories() {
        return await this.categoryFaqDal.findAllCategories();
    }
    async findCategoryById(id) {
        return await this.categoryFaqDal.findCategoryById(id);
    }
    async createCategory(categoryData) {
        return await this.categoryFaqDal.createCategory(categoryData);
    }
    async updateCategoryById(id, categoryData) {
        return await this.categoryFaqDal.updateCategoryById(id, categoryData);
    }
    async deleteCategoryById(id) {
        return await this.categoryFaqDal.deleteCategoryById(id);
    }
}
exports.CategoryFaqService = CategoryFaqService;
