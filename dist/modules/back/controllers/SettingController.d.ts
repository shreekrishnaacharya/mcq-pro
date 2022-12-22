import { NextFunction, Request, Response } from "@damijs/core";
import { Controller, Methods } from "@damijs/core";
import Setting from "../../../models/Setting";
declare class SettingController extends Controller<Setting> {
    constructor();
    requiredLogin: () => true | string[];
    view: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    update: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    route: () => {
        method: Methods;
        path: string;
        action: string;
    }[];
}
export default SettingController;
