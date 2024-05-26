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
exports.CategoryFaqService = void 0;
const category_faq_dal_1 = require("../dals/category-faq.dal");
class CategoryFaqService {
    constructor() {
        this.categoryFaqDal = new category_faq_dal_1.CategoryFaqDal();
    }
    findAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryFaqDal.findAllCategories();
        });
    }
    findCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryFaqDal.findCategoryById(id);
        });
    }
    createCategory(categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryFaqDal.createCategory(categoryData);
        });
    }
    updateCategoryById(id, categoryData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryFaqDal.updateCategoryById(id, categoryData);
        });
    }
    deleteCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.categoryFaqDal.deleteCategoryById(id);
        });
    }
}
exports.CategoryFaqService = CategoryFaqService;
