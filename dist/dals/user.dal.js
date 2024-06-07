"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDal = void 0;
const user_model_1 = require("../models/Users/user-model");
class UserDal {
    async findAllUsers() {
        return await user_model_1.UserModel.find();
    }
    async findUserById(id) {
        return await user_model_1.UserModel.findById(id);
    }
    async createUser(articleData) {
        const newUser = new user_model_1.UserModel(articleData);
        return newUser;
    }
    async updateUserById(id, userData) {
        return await user_model_1.UserModel.findByIdAndUpdate(id, userData);
    }
    async deleteUserById(id) {
        return await user_model_1.UserModel.findByIdAndDelete(id);
    }
}
exports.UserDal = UserDal;
