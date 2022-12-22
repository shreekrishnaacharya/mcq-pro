import { NextFunction, Request, Response } from "express";
import UserModel from "../../../models/User";
import { Controller, Methods } from "@damijs/core";
declare class UserController extends Controller<UserModel> {
    constructor();
    requiredLogin: () => boolean;
    profile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    mypost: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    route: () => {
        method: Methods;
        path: string;
        action: string;
    }[];
}
export default UserController;
