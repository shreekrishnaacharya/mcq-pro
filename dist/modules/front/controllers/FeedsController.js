import { Controller, HttpCode, Methods } from "@damijs/core";
import Ans from "../../../models/Ans";
class FeedsController extends Controller {
    constructor() {
        super(Ans);
        this.requiredLogin = () => {
            return false;
            // return ["index", "create", "update", "delete", "view"];
        };
        this.create = async (req, res, next) => {
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
            }
            catch (err) {
                console.log(err);
                res.status(HttpCode.INTERNAL_SERVER_ERROR).send({});
            }
            next();
        };
        this.route = () => {
            return [
                { method: Methods.POST, path: "/", action: "create" },
            ];
        };
    }
}
export default FeedsController;
