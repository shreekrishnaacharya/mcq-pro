import { NextFunction, Request, Response } from "express";
import { Controller, HttpCode, Methods, isEmpty } from "@damijs/core";
import Ans from "../../../models/Ans";
import Pans from "../../../models/Pans";

class FeedsController extends Controller<Ans> {
    constructor() {
        super(Ans);
    }
    requiredLogin = () => {
        return false
        // return ["index", "create", "update", "delete", "view"];
    };


    create = async (req: Request, res: Response, next: NextFunction) => {
        const model = this.getModel();
        const dataList = req.body;
        try {
            if (model.load(dataList)) {
                if (await model.save()) {
                    res.sendStatus(HttpCode.ACCEPTED);
                    return next();
                }
            }
            res.sendStatus(HttpCode.BAD_REQUEST);
        } catch (err) {
            console.log(err)
            res.status(HttpCode.INTERNAL_SERVER_ERROR).send({});
        }
        next();
    }
  route = () => {
        return [
            { method: Methods.POST, path: "/", action: "create" },
        ];
    };
}

export default FeedsController;