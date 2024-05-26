import { CategoryFaqModel, ICategoryFaq } from "../models/CategoryFaq/category-faq-model";

export class CategoryFaqDal {
  async findAllCategories(): Promise<ICategoryFaq[]> {
    return await CategoryFaqModel.find();
  }

  async findCategoryById(id: string): Promise<ICategoryFaq | null> {
    return await CategoryFaqModel.findById(id);
  }

  async createCategory(categoryData: ICategoryFaq): Promise<ICategoryFaq> {
    const category = new CategoryFaqModel(categoryData);
    return await category.save();
  }

  async updateCategoryById(id: string, categoryData: Partial<ICategoryFaq>): Promise<ICategoryFaq | null> {
    return await CategoryFaqModel.findByIdAndUpdate(id, categoryData, { new: true });
  }

  async deleteCategoryById(id: string): Promise<ICategoryFaq | null> {
    return await CategoryFaqModel.findByIdAndDelete(id);
  }
}

