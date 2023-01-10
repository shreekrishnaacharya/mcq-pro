import { NextFunction, Request, Response } from "express";
import { Controller, HttpCode, Methods, isEmpty } from "@damijs/core";
import Ans from "../../../models/Ans";
import Pans from "../../../models/Pans";

class ParentController extends Controller<Ans> {
    constructor() {
        super(Ans);
    }
    requiredLogin = () => {
        return false
        // return ["index", "create", "update", "delete", "view"];
    };


    check = async (req: Request, res: Response, next: NextFunction) => {
        const model = new Pans();
        const sid = req.params.id;
        const smodel = await model.find(q => {
            return q.andWhere({ sid })
        }).one();
        if (isEmpty(smodel)) {
            res.send({ status: false });
        } else {
            res.send({
                status: true,
                sid: smodel.getValue("sid")
            });
        }
        next();
    }

    parent = async (req: Request, res: Response, next: NextFunction) => {
        const model = new Pans();
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
            { method: Methods.GET, path: "/:id", action: "check" },
            { method: Methods.PUT, path: "/", action: "parent" },
        ];
    };
}

export default ParentController;