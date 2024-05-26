import mongoose from 'mongoose';

export interface ICategoryForum {
    username: string;
    password: string | undefined;
    email: string;
    role : string;
    avatar : string;
}

const categoryForumSchema = new mongoose.Schema<ICategoryForum>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String},
    avatar: { type: String }
});

export const CategoryForumCollection = mongoose.model<ICategoryForum>('categoryForum', categoryForumSchema);
