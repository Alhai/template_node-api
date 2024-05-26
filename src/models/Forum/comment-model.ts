import mongoose from 'mongoose';

export interface IComment {
    content: string;
    authorId: string | undefined;
    postId : string;
    creationDate : Date;
}

const commentSchema = new mongoose.Schema<IComment>({
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    postId: { type: String, required: true },
    creationDate: { type: Date}
});

export const UserModel = mongoose.model<IComment>('Comment', commentSchema);
