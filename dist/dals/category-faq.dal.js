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
exports.CategoryFaqDal = void 0;
const category_faq_model_1 = require("../models/CategoryFaq/category-faq-model");
class CategoryFaqDal {
    findAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_faq_model_1.CategoryFaqModel.find();
        });
    }
    findCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_faq_model_1.CategoryFaqModel.findById(id);
        });
    }
    createCategory(categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            const category = new category_faq_model_1.CategoryFaqModel(categoryData);
            return yield category.save();
        });
    }
    updateCategoryById(id, categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_faq_model_1.CategoryFaqModel.findByIdAndUpdate(id, categoryData, { new: true });
        });
    }
    deleteCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_faq_model_1.CategoryFaqModel.findByIdAndDelete(id);
        });
    }
}
exports.CategoryFaqDal = CategoryFaqDal;
