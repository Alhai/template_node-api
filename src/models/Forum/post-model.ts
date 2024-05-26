import mongoose from 'mongoose';

export interface IPost {
    title: string;
    content: string | undefined;
    authorId: string;
    categoryId : string;
    creationDate : string;
    likes : boolean;
}

const postSchema = new mongoose.Schema<IPost>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    categoryId: { type: String},
    creationDate: { type: String },
    likes : { type : Boolean}
});

export const UserModel = mongoose.model<IPost>('Post', postSchema);
