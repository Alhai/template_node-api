import mongoose from 'mongoose';

export interface IUser {
    username: string;
    password: string | undefined;
    email: string;
    role : string;
    avatar : string;
}

const userSchema = new mongoose.Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String},
    avatar: { type: String }
});

export const UserModel = mongoose.model<IUser>('User', userSchema);
