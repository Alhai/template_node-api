import { IUser, UserModel } from "../models/Users/user-model";

export class UserService {
    async findAllUsers(): Promise<IUser[]> {
        return await UserModel.find();
    }

    async findUserById(id: string): Promise<IUser | null> {
        return await UserModel.findById(id);
    }

    async createUser(userData: IUser): Promise<IUser> {
        const newUser = new UserModel(userData);
        await newUser.save();
        return newUser;
    }

    async updateUserById(id: string, userData: IUser): Promise<IUser | null> {
        return await UserModel.findByIdAndUpdate(id, userData, { new: true });
    }

    async deleteUserById(id: string): Promise<IUser | null> {
        return await UserModel.findByIdAndDelete(id);
    }
}