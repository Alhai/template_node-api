"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDal = void 0;
const user_model_1 = require("../models/Users/user-model");
class UserDal {
    findAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.UserModel.find();
        });
    }
    findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.UserModel.findById(id);
        });
    }
    createUser(articleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new user_model_1.UserModel(articleData);
            return newUser;
        });
    }
    updateUserById(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.UserModel.findByIdAndUpdate(id, userData);
        });
    }
    deleteUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_model_1.UserModel.findByIdAndDelete(id);
        });
    }
}
exports.UserDal = UserDal;
