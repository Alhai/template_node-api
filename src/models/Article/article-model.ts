import mongoose from 'mongoose';

export interface IArticle {
    title : string;
    body : string ;
    author : string;
    createdAt : Date;
}

const articleSchema = new mongoose.Schema<IArticle>({
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const ArticleModel = mongoose.model<IArticle>('Article', articleSchema);
