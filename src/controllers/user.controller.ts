import { Request, Response } from 'express';

import { IUser } from "../models/Users/user-model";
import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService()
    }
    async findAllUsers(req: Request, res: Response) {
        try {
            const users = await this.userService.findAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async findUserById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const user = await this.userService.findUserById(id)
            if (user) {
                res.json(user);
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {

        }
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

    async updateUserById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const userData: IUser = req.body;
            const updatedUser = await this.userService.updateUserById(id, userData);
            if (updatedUser) {
                res.json(updatedUser)
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async deleteUserById(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const deletedUser = await this.userService.deleteUserById(id);
            if (deletedUser) {
                res.status(200).send("User is deleted");
            } else {
                res.status(404).send('Article not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}