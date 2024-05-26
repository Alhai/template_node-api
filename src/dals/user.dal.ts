import { IUser, UserModel } from "../models/Users/user-model";

import mongoose from "mongoose";

export class UserDal {

   async findAllUsers( ): Promise<IUser[]>{
            return await UserModel.find();
    }

   async findUserById(id : string){
        return await UserModel.findById(id)
    }

   async createUser(articleData : IUser){
    const newUser = new UserModel(articleData);
    return newUser;
    }

    async updateUserById(id : string, userData : IUser ): Promise<string | null> {
    return await UserModel.findByIdAndUpdate(id, userData);
    }

   async deleteUserById(id : string){
    return await UserModel.findByIdAndDelete(id);      
    }
}