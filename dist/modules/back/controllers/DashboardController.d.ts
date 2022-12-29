import { Methods, NextFunction, Request, Response } from "@damijs/core";
import { Controller } from "@damijs/core";
import Ans from "../../../models/Ans";
declare class DashboardController extends Controller<Ans> {
    constructor();
    requiredLogin: () => boolean;
    index: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    route: () => {
        method: Methods;
        path: string;
        action: string;
    }[];
}
export default DashboardController;
