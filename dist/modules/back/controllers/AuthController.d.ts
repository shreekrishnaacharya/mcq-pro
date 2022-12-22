import { NextFunction, Request, Response } from "express";
import { Controller, Methods } from "@damijs/core";
import Admin from "../../../models/User";
declare class AuthController extends Controller<Admin> {
    constructor();
    beforeAction: () => any[];
    requiredLogin: () => boolean;
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    refresh: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    logout: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    signup: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    route: () => {
        method: Methods;
        path: string;
        action: string;
    }[];
}
export default AuthController;
