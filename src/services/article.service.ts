import { ArticleDal } from "../dals/article.dal";
import { IArticle } from "../models/Article/article-model";

export class ArticleService {
    private articleDal: ArticleDal;

    constructor() {
        this.articleDal = new ArticleDal();
    }

    async findAllArticles(): Promise<IArticle[]> {
        return await this.articleDal.findAllArticles();
    }

    async findArticleById(id: string): Promise<IArticle | null> {
        return await this.articleDal.findArticleById(id);
    } 

    async createArticle(articleData: IArticle): Promise<IArticle> {
        return await this.articleDal.createArticle(articleData);
    }

    async updateArticleById(id: string, articleData: Partial<IArticle>): Promise<IArticle | null> {
        return await this.articleDal.updateArticleById(id, articleData);
    }

    async deleteArticleById(id: string): Promise<IArticle | null> {
        return await this.articleDal.deleteArticleById(id);
    }
}
