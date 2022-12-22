import { NextFunction, Request, Response } from "@damijs/core";
import { Controller, DataProvider, HttpCode, Methods } from "@damijs/core";
import Setting from "../../../models/Setting";

class SettingController extends Controller<Setting> {
    constructor() {
        super(Setting);
    }

    requiredLogin = () => {
        return true
        return ["create", "update", "delete", "view"];
    };

    /*
      @View action
      this action view the data
    */

    view = async (req: Request, res: Response, next: NextFunction) => {
        try {
            //if empty it will return null else it will return a model with data
            const model = await this.getModel().findOne(1);
            if (model == null) {
                res.sendStatus(HttpCode.NOT_FOUND);
            } else {
                res.send(await model.toJson());
            }
        } catch (err) {
            res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
        }
        next();
    };

    /*
          @Update action
          this action update the data
    */

    update = async (req: Request, res: Response, next: NextFunction) => {
        const model = this.getModel();
        try {
            if (model.load(req.body)) {
                if (await model.update(1)) {
                    //return 204 on success
                    res.sendStatus(HttpCode.ACCEPTED);
                } else {
                    //return not found status
                    res.sendStatus(HttpCode.NOT_FOUND);
                }
            } else {
                res.sendStatus(HttpCode.BAD_REQUEST);
            }
        } catch (err) {
            res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
        }
        next();
    }

    /*
          @Route function
          this function holds the defination for routes for actions in controllers
    */
    route = () => {
        return [
            { method: Methods.GET, path: "/", action: "view" },
            { method: Methods.POST, path: "/", action: "update" },
        ];
    }
}

export default SettingController;
