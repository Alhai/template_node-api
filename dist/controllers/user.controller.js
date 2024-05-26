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
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
class UserController {
    constructor() {
        this.userService = new user_service_1.UserService();
    }
    findAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.findAllUsers();
                res.json(users);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    findUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = yield this.userService.findUserById(id);
                if (user) {
                    res.json(user);
                }
                else {
                    res.status(404).send('Article not found');
                }
            }
            catch (error) {
            }
        });
    }
    // async createUser(req : Request, res : Response){
    //     try {
    //         const userData: IUser = req.body;
    //         const newArticle = await this.userService.createUser(userData);
    //         res.status(201).json(newArticle);
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }
    updateUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const userData = req.body;
                const updatedUser = yield this.userService.updateUserById(id, userData);
                if (updatedUser) {
                    res.json(updatedUser);
                }
                else {
                    res.status(404).send('Article not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
    deleteUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedUser = yield this.userService.deleteUserById(id);
                if (deletedUser) {
                    res.status(200).send("User is deleted");
                }
                else {
                    res.status(404).send('Article not found');
                }
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.UserController = UserController;
