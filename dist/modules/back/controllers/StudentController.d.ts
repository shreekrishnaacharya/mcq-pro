import { NextFunction, Request, Response } from "express";
import { Controller, Methods } from "@damijs/core";
import Ans from "../../../models/Ans";
declare class StudentController extends Controller<Ans> {
    constructor();
    requiredLogin: () => boolean;
    index: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    view: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    route: () => {
        method: Methods;
        path: string;
        action: string;
    }[];
}
export default StudentController;
