import { CategoryFaqDal } from '../dals/category-faq.dal';
import { ICategoryFaq } from '../models/CategoryFaq/category-faq-model';

export class CategoryFaqService {
  private categoryFaqDal: CategoryFaqDal;

  constructor() {
    this.categoryFaqDal = new CategoryFaqDal();
  }

  async findAllCategories(): Promise<ICategoryFaq[]> {
    return await this.categoryFaqDal.findAllCategories();
  }

  async findCategoryById(id: string): Promise<ICategoryFaq | null> {
    return await this.categoryFaqDal.findCategoryById(id);
  }

  async createCategory(categoryData: ICategoryFaq): Promise<ICategoryFaq> {
    return await this.categoryFaqDal.createCategory(categoryData);
  }

  async updateCategoryById(id: string, categoryData: Partial<ICategoryFaq>): Promise<ICategoryFaq | null> {
    return await this.categoryFaqDal.updateCategoryById(id, categoryData);
  }

  async deleteCategoryById(id: string): Promise<ICategoryFaq | null> {
    return await this.categoryFaqDal.deleteCategoryById(id);
  }
}