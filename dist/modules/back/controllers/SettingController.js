import { Controller, HttpCode, Methods } from "@damijs/core";
import Setting from "../../../models/Setting";
class SettingController extends Controller {
    constructor() {
        super(Setting);
        this.requiredLogin = () => {
            return true;
            return ["create", "update", "delete", "view"];
        };
        /*
          @View action
          this action view the data
        */
        this.view = async (req, res, next) => {
            try {
                //if empty it will return null else it will return a model with data
                const model = await this.getModel().findOne(1);
                if (model == null) {
                    res.sendStatus(HttpCode.NOT_FOUND);
                }
                else {
                    res.send(await model.toJson());
                }
            }
            catch (err) {
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        /*
              @Update action
              this action update the data
        */
        this.update = async (req, res, next) => {
            const model = this.getModel();
            try {
                if (model.load(req.body)) {
                    if (await model.update(1)) {
                        //return 204 on success
                        res.sendStatus(HttpCode.ACCEPTED);
                    }
                    else {
                        //return not found status
                        res.sendStatus(HttpCode.NOT_FOUND);
                    }
                }
                else {
                    res.sendStatus(HttpCode.BAD_REQUEST);
                }
            }
            catch (err) {
                res.sendStatus(HttpCode.INTERNAL_SERVER_ERROR);
            }
            next();
        };
        /*
              @Route function
              this function holds the defination for routes for actions in controllers
        */
        this.route = () => {
            return [
                { method: Methods.GET, path: "/", action: "view" },
                { method: Methods.POST, path: "/", action: "update" },
            ];
        };
    }
}
export default SettingController;
