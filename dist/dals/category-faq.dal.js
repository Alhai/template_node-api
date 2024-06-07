"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFaqDal = void 0;
const category_faq_model_1 = require("../models/CategoryFaq/category-faq-model");
class CategoryFaqDal {
    async findAllCategories() {
        return await category_faq_model_1.CategoryFaqModel.find();
    }
    async findCategoryById(id) {
        return await category_faq_model_1.CategoryFaqModel.findById(id);
    }
    async createCategory(categoryData) {
        const category = new category_faq_model_1.CategoryFaqModel(categoryData);
        return await category.save();
    }
    async updateCategoryById(id, categoryData) {
        return await category_faq_model_1.CategoryFaqModel.findByIdAndUpdate(id, categoryData, { new: true });
    }
    async deleteCategoryById(id) {
        return await category_faq_model_1.CategoryFaqModel.findByIdAndDelete(id);
    }
}
exports.CategoryFaqDal = CategoryFaqDal;
