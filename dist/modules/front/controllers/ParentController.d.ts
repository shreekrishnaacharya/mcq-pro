import { NextFunction, Request, Response } from "express";
import { Controller, Methods } from "@damijs/core";
import Ans from "../../../models/Ans";
declare class FeedsController extends Controller<Ans> {
    constructor();
    requiredLogin: () => boolean;
    check: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    parent: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    route: () => {
        method: Methods;
        path: string;
        action: string;
    }[];
}
export default FeedsController;
