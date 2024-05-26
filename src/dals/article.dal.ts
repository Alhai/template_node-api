import { ArticleModel, IArticle } from "../models/Article/article-model";

export class ArticleDal {
  // Rechercher tous les articles
  async findAllArticles(): Promise<IArticle[]> {
    return await ArticleModel.find();
  }

  // Trouver un article par ID
  async findArticleById(id: string): Promise<IArticle | null> {
    return await ArticleModel.findById(id);
  }

  // Créer un nouvel article
  async createArticle(articleData: IArticle): Promise<IArticle> {
    const article = new ArticleModel(articleData);
    return await article.save();
  }

  // Mettre à jour un article par ID, utiliser IArticle pour permettre des mises à jour
  async updateArticleById(id: string, articleData: Partial<IArticle>): Promise<IArticle | null> {
    return await ArticleModel.findByIdAndUpdate(id, articleData, { new: true });
  }

  // Supprimer un article par ID
  async deleteArticleById(id: string): Promise<IArticle | null> {
    return await ArticleModel.findByIdAndDelete(id);
  }
}
