"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_model_1 = require("../models/Users/user-model");
class UserService {
    async findAllUsers() {
        return await user_model_1.UserModel.find();
    }
    async findUserById(id) {
        return await user_model_1.UserModel.findById(id);
    }
    async createUser(userData) {
        const newUser = new user_model_1.UserModel(userData);
        await newUser.save();
        return newUser;
    }
    async updateUserById(id, userData) {
        return await user_model_1.UserModel.findByIdAndUpdate(id, userData, { new: true });
    }
    async deleteUserById(id) {
        return await user_model_1.UserModel.findByIdAndDelete(id);
    }
}
exports.UserService = UserService;
